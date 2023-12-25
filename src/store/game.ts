import { defineStore } from "pinia";
import Player from "../entities/Player";

import { list } from './../decks/st01';
import Card from "../entities/Card";
import { log } from "./log";

interface GameState {
    players: Player[];
    turn: {
        count: number,
        player: number,
        phase: number,
    },
    stage: Card | null,
    battle: {
        started: boolean,
        step: "targeting" | "blocking" | "countering" | "damage",
        attacker: Card | null,
        blocker: Card | null,
        target: Card | null,
    }
}

export const game = defineStore('game', {
    state: (): GameState => ({
        players: [
            new Player(0),
            new Player(1),
        ],
        turn: {
            count: 0,
            player: 0,
            phase: 0,
        },
        stage: null,
        battle: {
            started: false,
            step: "targeting",
            attacker: null,
            blocker: null,
            target: null,
        }
    }),
    getters: {
        players_: (state) => state.players,
    },
    actions: {
        async setup() {
            log().add("Game start")
            
            for (const player of this.$state.players) {
                player.deck.buildFromList(list)
                player.deck.don.map(c => c.owner = player)
                player.deck.leader.owner = player;
                player.draw(5)
                console.log(player.deck)
            }

            this.refresh()
        },
        async refresh() {
            const player = this.players[this.turn.player];
            console.log(`Starting refresh phase for user ${player.id}`)

            player.characters.forEach((card: Card) => {
                player.cost = [
                    ...player.cost,
                    ...card.attached,
                ];

                card.attached = [];
                card.untap();
            })

            player.cost.forEach((card: Card) => card.untap());

            // player.deck.getLeader().untap();

            await (new Promise(res => setTimeout(res, 1000)));
            this.turn.phase++;
            this.draw()
        },
        async draw() {
            const player = this.players[this.turn.player]
            console.log(`Starting draw phase for user ${player.id}`)

            if (this.turn.count != 0) {
                player.draw(1)
            }

            await (new Promise(res => setTimeout(res, 1000)));
            this.turn.phase++;
            this.don();
        },
        async don() {
            const player = this.players[this.turn.player]
            console.log(`Starting don phase for user ${player.id}`)

            if (this.turn.count == 0) {
                player.cost.push(player.deck.don.pop() as Card)
            } else {
                player.cost.push(player.deck.don.pop() as Card)
                player.cost.push(player.deck.don.pop() as Card)
            }

            await (new Promise(res => setTimeout(res, 1000)));
            this.turn.phase++;
            this.main();
        },
        async main() {
            const player = this.players[this.turn.player]
            console.log(`Starting draw phase for user ${player.id}`)
        },
        async startBattle(attacker: Card) {
            this.battle.started = true;
            this.battle.step = "targeting";
            this.battle.attacker = attacker;
        },
        async targetStep(target: Card) {
            console.log('chegou no target step')
            this.battle.target = target;
            this.damageStep();
        },
        async damageStep() {
            this.battle.step = "damage";
            
            const attacker = this.battle.attacker;
            const target = this.battle.target;
            const blocker = this.battle.blocker;

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
                this.battle.started = false;
                this.battle.step = "targeting";
                return;
            };
            
            if (target.getType() === 'char') {
                log().add("Defending card was KO'd", "info", { attacker, target });
                target.ko();
                return;
            }

            // Life trigger step
            if (target.getOwner()!.lifeCards.length === 0) {
                // game().over();
                console.log('game over')
                return;
            } else {
                target.getOwner()!.drawFromLifeCards(1);
            }
        },
        async end() {
            this.turn.player = (this.turn.player + 1) % this.players.length;
            this.turn.phase = 0;
            this.turn.count++;
            this.refresh();
        }
    }
})