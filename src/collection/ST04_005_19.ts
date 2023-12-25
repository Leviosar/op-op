
import Card, { CardType } from "../entities/Card";

export default class ST04_005_19 extends Card {
    public static id: string = "ST04_005_19";
    
    public static _name: string = "Queen";

    public effect: string = "<Blocker> (When your opponent attacks, by resting this card, you can change the attack target to this card.)\r\n[On Play] DON!! -1 (Return the specified amount of DON!! from your field to your DON!! deck.): Draw 2 cards, then trash 1 card from your hand.";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-005_3202af_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST04_005_19.id;
    }
    
    public getType() : CardType {
        return ST04_005_19.type as CardType;
    }
    
    public getImage() {
        return ST04_005_19.image;
    }
    
    public getName() {
        return ST04_005_19._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_005_19.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_005_19.keywords;
    }
    
    public getPower(): number {
        return ST04_005_19.power;
    }

    public getCounter(): number {
        return ST04_005_19.counter;
    }

    public getLife(): number {
        return ST04_005_19.life;
    }
}
