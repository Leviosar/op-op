import { defineStore } from "pinia";
import Card from "../entities/Card";
import { log } from "./log";
import { target } from "./target";
import { game } from "./game";

interface BattleState {
    started: boolean;
    step: "targeting" | "blocking" | "selecting-blocker" | "countering" | "selecting-counters" | "damage";
    attacker_: Card | null;
    blocker_: Card | null;
    target_: Card | null;
    counters_: Card[];
}

export const battle = defineStore('battle', {
    state: (): BattleState => ({
        started: false,
        step: "targeting",
        attacker_: null,
        blocker_: null,
        target_: null,
        counters_: [],
    }),
    actions: {
        reset() {
            this.started = false;
            this.step = "targeting";
            this.attacker_ = null;
            this.target_ = null;
            this.blocker_ = null;
            this.counters_ = [];
        },
        async start(attacker: Card) {
            this.started = true;
            this.attacker_ = attacker;
            this.step = "targeting";

            target().request({
                amount: 1,
                quantifier: "exactly",
                filters: [
                    { comparator: (c) => ["leader", "char"].includes(c.getType()) },
                    { comparator: (c) => c.getOwner()?.id !== game().turn.player },
                    { comparator: (c) => c.isValidTargetForAttack },
                ],
                callback: (c) => this.target(c[0]),
            })
        },
        async target(target: Card) {
            this.target_ = target;
            this.step = "blocking";
            this.target_.getOwner()!.promptToBlock();
        },
        async blocker(blocker: Card | null) {
            this.blocker_ = blocker;

            if (blocker !== null) {
                blocker.tap();
            }
            
            this.step = "countering";
            this.target_?.getOwner()!.promptToCounter();
        },
        async counter(counters: Card[]) {
            for (const counter of counters) {
                this.counters_.push(counter);
                counter.getOwner()!.trash.push(counter)
                counter.getOwner()!.hand = counter.getOwner()!.hand.filter((c) => c.uuid !== counter.uuid);
            }

            this.target_?.getOwner()!.promptToCounter();
        },
        async damage() {
            const attacker = this.attacker_;
            const target = this.target_;
            const blocker = this.blocker_;

            if (attacker === null || target === null) return;

            // Damage step
            let result = false;
            
            // Formula should be attack + (DON!! * 1000) + temporary_effects
            const attackerPower = attacker.getPower() + (attacker.attached.filter(c => c.getType() === 'don').length * 1000)

            const counters = this.counters_.reduce((acc, card) => acc + card.getCounter(), 0);

            if (blocker !== null) {
                const blockerPower = blocker.getPower() + (blocker.attached.filter(c => c.getType() === 'don').length * 1000)
                result = attackerPower >= (blockerPower + counters)
            } else {
                const targetPower = target.getPower() + (target.attached.filter(c => c.getType() === 'don').length * 1000)
                result = attackerPower >= (targetPower + counters)
            }

            // Nothings happens, feijoada.
            if (!result) {
                log().add("Battle ended with no damage", "info", { attacker, target });
                this.reset();
                return;
            };
            
            if (target.getType() === 'char') {
                log().add("Defending card was KO'd", "info", { attacker, target });
                target.ko();
                this.reset();
                return;
            }

            // Life trigger step
            if (target.getOwner()!.lifeCards.length === 0) {
                // game().over();
                console.log('game over')
                return;
            } else {
                this.reset();
                target.getOwner()!.drawFromLifeCards(1);
            }
        }
    }
})