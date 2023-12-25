
import Card, { CardType } from "../entities/Card";

export default class ST06_002_282 extends Card {
    public static id: string = "ST06_002_282";
    
    public static _name: string = "Koby";

    public effect: string = "[On Play] You may trash a card from your hand: K.O. up to 1 of your opponent's Characters that costs 0.";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-002_213f9e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 2000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST06_002_282.id;
    }
    
    public getType() : CardType {
        return ST06_002_282.type as CardType;
    }
    
    public getImage() {
        return ST06_002_282.image;
    }
    
    public getName() {
        return ST06_002_282._name;
    }
    
    public getCost(): number {
        return parseInt(ST06_002_282.cost);
    }
    
    public getKeywords(): string[] {
        return ST06_002_282.keywords;
    }
    
    public getPower(): number {
        return ST06_002_282.power;
    }

    public getCounter(): number {
        return ST06_002_282.counter;
    }

    public getLife(): number {
        return ST06_002_282.life;
    }
}
