
import Card, { CardType } from "../entities/Card";

export default class ST02_017_112 extends Card {
    public static id: string = "ST02_017_112";
    
    public static _name: string = "Straw Sword";

    public effect: string = "[Main] Rest 1 of your opponent's Characters.\r\n\r\n[Trigger] Play 1 {Supernovas} type card with a cost of 2 or less from your hand.";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-017_8e32c5_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Supernovas","Hawkins Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST02_017_112.id;
    }
    
    public getType() : CardType {
        return ST02_017_112.type as CardType;
    }
    
    public getImage() {
        return ST02_017_112.image;
    }
    
    public getName() {
        return ST02_017_112._name;
    }
    
    public getCost(): number {
        return parseInt(ST02_017_112.cost);
    }
    
    public getKeywords(): string[] {
        return ST02_017_112.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST02_017_112.archetypes;
    }
    
    public getPower(): number {
        return ST02_017_112.power;
    }

    public getCounter(): number {
        return ST02_017_112.counter;
    }

    public getLife(): number {
        return ST02_017_112.life;
    }
}
