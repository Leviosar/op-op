import { defineStore } from "pinia";
import Card from "../entities/Card";
import { log } from "./log";

interface BattleState {
    started: boolean;
    step: "targeting" | "blocking" | "selecting-blocker" | "countering" | "selecting-counters" | "damage";
    attacker_: Card | null;
    blocker_: Card | null;
    target_: Card | null;
}

export const battle = defineStore('battle', {
    state: (): BattleState => ({
        started: false,
        step: "targeting",
        attacker_: null,
        blocker_: null,
        target_: null,
    }),
    actions: {
        reset() {
            this.started = false;
            this.step = "targeting";
        },
        async start(attacker: Card) {
            this.started = true;
            this.attacker_ = attacker;
            this.step = "targeting";
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
        },
        async counter(counters: Card[]) {
            for (const counter of counters) {
                // apply counters
                console.log(counter)
            }

            this.step = "damage";
        },
        async damage() {
            const attacker = this.attacker_;
            const target = this.target_;

            if (attacker === null || target === null) return;

            // Damage step
            let result = false;
            
            // Formula should be attack + (DON!! * 1000) + temporary_effects
            const attackerPower = attacker.getPower() + (attacker.attached.filter(c => c.getType() === 'don').length * 1000)

            // if (block.response) {
            //     const blockerPower = block.blocker!.getPower() + (block.blocker!.attached.filter(c => c.getType() === 'don').length * 1000)
            //     result = attackerPower >= blockerPower
            // } else {
                const targetPower = target.getPower() + (target.attached.filter(c => c.getType() === 'don').length * 1000)
                result = attackerPower >= targetPower
            // }

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