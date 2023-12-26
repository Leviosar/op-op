
import Card, { CardType } from "../entities/Card";

export default class OP02_059_329 extends Card {
    public static id: string = "OP02_059_329";
    
    public static _name: string = "Boa Hancock";

    public effect: string = "[When Attacking] Draw 1 card and trash 1 card from your hand. Then, trash up to 3 cards from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-059_84d3b4_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_059_329.id;
    }
    
    public getType() : CardType {
        return OP02_059_329.type as CardType;
    }
    
    public getImage() {
        return OP02_059_329.image;
    }
    
    public getName() {
        return OP02_059_329._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_059_329.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_059_329.keywords;
    }
    
    public getPower(): number {
        return OP02_059_329.power;
    }

    public getCounter(): number {
        return OP02_059_329.counter;
    }

    public getLife(): number {
        return OP02_059_329.life;
    }
}
