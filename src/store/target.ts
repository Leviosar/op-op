import Card from "../entities/Card";

import { defineStore } from "pinia";

export interface TargetFilter {
    // High order function receiving a card, performing any checks on it and returning
    // true to all the cards that should be available for user choice.
    comparator: (card: Card) => boolean;
}

export interface TargetRequest {
    // All requests must have at least one filter (this is not possible in typescript type system)
    // so please be aware :)
    filters: TargetFilter[];
    // All requests must state explicitly the number of cards being targeted
    amount: number;
    // As well as a quantifier
    quantifier: "up-to" | "exactly" | "at-least";
    // After the user finishes selecting the cards, a prompt will be presented to confirm the choices
    // and this callback function will be called with the selected cards.
    callback: (cards: Card[]) => any;
}

export interface TargetState {
    // Holds a list of target requests that must be completed in FIFO order
    requests: TargetRequest[];
    // Holds a temporary list with the currently selected cards for the first item of the requests queue
    selected: Card[];
}

export const target = defineStore('target', {
    state: (): TargetState => ({
        requests: [],
        selected: [],
    }),
    actions: {
        request(req: TargetRequest) {
            this.requests.push(req);
        },
        select(card: Card) {
            const request = this.requests[0];

            if (!this.check(card)) throw "Invalid card selection";

            this.selected.push(card);

            if (["up-to", "exactly"].includes(request.quantifier) && this.selected.length === request.amount) {
                request.callback(this.selected);
                this.requests.shift();
                this.selected = [];
            }
        },
        check(card: Card) {
            const request = this.requests[0];
            const predicates = request.filters.map(f => f.comparator(card));
            // Returns true if every predicate is true
            return predicates.every(p => p === true);
        }
    }
})