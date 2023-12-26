
import Card, { CardType } from "../entities/Card";

export default class ST06_015_283 extends Card {
    public static id: string = "ST06_015_283";
    
    public static _name: string = "Great Eruption";

    public effect: string = "[Main] Draw 1 card. One of your opponent's Characters Cost -2 for this turn.\r\n[Trigger] Your opponent picks 1 card from their own hand and trashes it.\r\n";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-015_21b9be_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST06_015_283.id;
    }
    
    public getType() : CardType {
        return ST06_015_283.type as CardType;
    }
    
    public getImage() {
        return ST06_015_283.image;
    }
    
    public getName() {
        return ST06_015_283._name;
    }
    
    public getCost(): number {
        return parseInt(ST06_015_283.cost);
    }
    
    public getKeywords(): string[] {
        return ST06_015_283.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST06_015_283.archetypes;
    }
    
    public getPower(): number {
        return ST06_015_283.power;
    }

    public getCounter(): number {
        return ST06_015_283.counter;
    }

    public getLife(): number {
        return ST06_015_283.life;
    }
}
