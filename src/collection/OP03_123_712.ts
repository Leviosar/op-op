
import Card, { CardType } from "../entities/Card";

export default class OP03_123_712 extends Card {
    public static id: string = "OP03_123_712";
    
    public static _name: string = "Charlotte Katakuri";

    public effect: string = "[On Play] Put up to 1 Character that costs 8 or less on the top or bottom of its owner's Life Area face-up.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-123_7c6d8f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "8";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Big Mom Pirates"];
    
    public static power: number = 8000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_123_712.id;
    }
    
    public getType() : CardType {
        return OP03_123_712.type as CardType;
    }
    
    public getImage() {
        return OP03_123_712.image;
    }
    
    public getName() {
        return OP03_123_712._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_123_712.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_123_712.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_123_712.archetypes;
    }
    
    public getPower(): number {
        return OP03_123_712.power;
    }

    public getCounter(): number {
        return OP03_123_712.counter;
    }

    public getLife(): number {
        return OP03_123_712.life;
    }
}
