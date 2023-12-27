import Card from "./Card";
import Deck from "./Deck";

import { log } from "../store/log";
import { dialog } from "../store/dialog";
import { battle } from "../store/battle";
import { target } from "../store/target";
import { game } from "../store/game";

export default class Player {
    public deck: Deck;
    
    public id: number;

    public hand: Card[];

    public trash: Card[];
    
    public cost: Card[];

    public characters: Card[];

    public lifeCards: Card[];

    public stage: Card | null = null;

    get untappedDons(): number {
        return this.cost.filter(c => !c.tapped).length;
    }

    constructor(id: number) {
        this.deck = new Deck();
        this.id = id;
        this.hand = [];
        this.cost = [];
        this.characters = [];
        this.trash = [];
        this.lifeCards = [];
    }

    public setupLife() {
        if (this.deck.cards.length === 0) throw "Cannot setup life cards on empty deck"
        if (this.deck.leader === undefined) throw "Cannot setup life cards on deck with no Leader"

        for (let i = 0; i < this.deck.leader.getLife(); i++) {
            const card = this.deck.pop();
            card.owner = this;
            this.lifeCards.push(card);
        }
    }

    public drawFromLifeCards(amount: number = 1) {
        for (let i = 0; i < amount; i++) {
            const card = this.lifeCards.pop();

            if (card === undefined) {
                // game over?
                return
            }

            // activate trigger effect 
            card.location = "hand";
            this.hand.push(card);
        }
    }
    
    public draw(amount: number = 1) {
        for (let i = 0; i < amount; i++) {
            const card = this.deck.pop();
            card.owner = this;
            card.location = "hand";
            this.hand.push(card);
        }
    }

    public pay(cost: number) {
        for (let i = 0; i < cost; i++) {
            this.cost.filter(c => !c.tapped)[0].tap()
        }
    }

    public async promptToBlock() {
        const availableBlockers = this.characters.filter((c) => c.getKeywords().includes("Blocker"))

        if (availableBlockers.length === 0) {
            log().add(`Player ${this.id} doesn't have any available blocker`)
            
            battle().blocker(null);
            battle().step = "countering";
            this.promptToCounter();
            return;
        }

        const response = await dialog().open({
            title: "Your opponent declared an attack",
            text: "You may choose a blocker or take the hit"
        })

        if (!response) {
            battle().blocker(null);
            battle().step = "countering";
            this.promptToCounter();
            return;
        };

        target().request({
            amount: 1,
            quantifier: "exactly",
            filters: [
                { comparator: (c: Card) => c.getOwner()!.id !== game().turn.player },
                { comparator: (c: Card) => c.getKeywords().includes("Blocker") },
                { comparator: (c: Card) => c.location === "character-area" },
                { comparator: (c: Card) => !c.tapped },
            ],
            callback: (cards: Card[]) => battle().blocker(cards[0]),
        })
        
        battle().step = "selecting-blocker";
    }

    public async promptToCounter() {
        const availableCounters = this.hand.filter((c) => c.getCounter() > 0)

        if (availableCounters.length === 0) {
            log().add(`Player ${this.id} doesn't have any available counter`)
            
            battle().step = "damage";
            battle().damage();
            return;
        }

        const response = await dialog().open({
            title: "Your opponent declared an attack",
            text: "You may choose any number of counters or take the hit"
        })

        if (!response) {
            battle().step = "damage";
            battle().damage();
            return;
        };

        target().request({
            amount: 1,
            quantifier: "at-least",
            filters: [
                { comparator: (c: Card) => c.getOwner()!.id !== game().turn.player },
                { comparator: (c: Card) => c.getCounter() > 0 },
                { comparator: (c: Card) => c.location === "hand" },
            ],
            callback: (cards: Card[]) => battle().counter(cards),
        })
        
        battle().step = "selecting-counters";
    }

}