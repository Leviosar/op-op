import { defineStore } from "pinia";
import Player from "../entities/Player";

import { list } from './../decks/st01';
import Card from "../entities/Card";

interface GameState {
    players: Player[];
    turn: {
        count: number,
        player: number,
        phase: number,
    },
    stage: Card | null
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
    }),
    getters: {
        players_: (state) => state.players,
    },
    actions: {
        async setup() {
            for (const player of this.$state.players) {
                player.deck.buildFromList(list)
                player.draw(5)
                console.log(player.deck)
            }

            this.refresh()
        },
        async refresh() {
            const player = this.players[this.turn.player];
            console.log(`Starting refresh phase for user ${player.id}`)

            player.characters.forEach((card) => {
                player.cost = [
                    ...player.cost,
                    ...card.attached,
                ];

                card.attached = [];
                card.untap();
            })

            player.cost.forEach(c => c.untap());

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
        async end() {
            this.turn.player = (this.turn.player + 1) % this.players.length;
            this.turn.phase = 0;
            this.turn.count++;
            this.refresh();
        }
    }
})