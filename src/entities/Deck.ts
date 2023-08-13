import Card from "./Card";
import { collection } from "../collection/index";

export default class Deck {
    private maxSize = 50;

    private cards: Card[];

    public leader: Card;

    constructor() {
        this.cards = [];
        this.leader = this.getLeader();
    }

    public first(): Card {
        return this.cards[0];
    }

    public pop(): Card {
        if (this.cards.length == 0) {
            throw "Empty hand"
        }

        const card = this.cards.pop() as Card;
        
        return card;
    }

    public getLeader() {
        return this.cards.filter(c => c.getType() == "leader")[0]
    }

    public buildFromList(list: string[]) {
        const cards = collection as (typeof Card)[]
        
        this.cards = list.map((item) => new (cards.filter(card => card.id.includes(item))[0])).sort(() => .5 - Math.random());
        this.leader = this.getLeader();
    }

    public randomDeck() {
        this.cards = collection.sort(() => .5 - Math.random()).slice(0, 40).map((i) => new i());
        this.leader = this.getLeader();
    }
}