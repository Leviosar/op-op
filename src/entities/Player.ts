import Card from "./Card";
import Deck from "./Deck";

export default class Player {
    public deck: Deck;
    
    public id: number;

    public hand: Card[];

    public trash: Card[];
    
    public cost: Card[];

    public characters: Card[];

    public stage: Card | null = null;

    constructor(id: number) {
        this.deck = new Deck();
        this.id = id;
        this.hand = [];
        this.cost = [];
        this.characters = [];
        this.trash = [];
    }

    public draw(amount: number = 1) {
        for (let i = 0; i < amount; i++) {
            this.hand.push(this.deck.pop());
        }
    }
}