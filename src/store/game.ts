import { defineStore } from "pinia";
import Player from "../entities/Player";

import { list } from './../decks/st01';

export const game = defineStore('game', {
    state: () => ({
        players: [
            new Player(1),
            new Player(2),
        ],
        turn: {
            player: 1,
            phase: 0,
        }
    }),
    actions: {
        setup() {
            for (const player of this.$state.players) {
                player.deck.buildFromList(list)
                player.draw(5)
                console.log(player.deck)
            }
        }
    }
})