
import Card, { CardType } from "../entities/Card";

export default class OP04_002_797 extends Card {
    public static id: string = "OP04_002_797";
    
    public static _name: string = "Igaram";

    public effect: string = "[Activate: Main] You may rest this Character and give your 1 active Leader −5000 power during this turn: Look at 5 cards from the top of your deck; reveal up to 1 {Alabasta} type card and add it to your hand. Then, place the rest at the bottom of your deck in any order.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-002_03c7fb_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Alabasta"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_002_797.id;
    }
    
    public getType() : CardType {
        return OP04_002_797.type as CardType;
    }
    
    public getImage() {
        return OP04_002_797.image;
    }
    
    public getName() {
        return OP04_002_797._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_002_797.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_002_797.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_002_797.archetypes;
    }
    
    public getPower(): number {
        return OP04_002_797.power;
    }

    public getCounter(): number {
        return OP04_002_797.counter;
    }

    public getLife(): number {
        return OP04_002_797.life;
    }
}
