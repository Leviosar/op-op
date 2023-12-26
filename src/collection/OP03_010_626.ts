
import Card, { CardType } from "../entities/Card";

export default class OP03_010_626 extends Card {
    public static id: string = "OP03_010_626";
    
    public static _name: string = "Fossa";

    public effect: string = "<Blocker>";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-010_7cd85b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetype: string[] = ["Whitebeard Pirates"];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_010_626.id;
    }
    
    public getType() : CardType {
        return OP03_010_626.type as CardType;
    }
    
    public getImage() {
        return OP03_010_626.image;
    }
    
    public getName() {
        return OP03_010_626._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_010_626.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_010_626.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_010_626.archetypes;
    }
    
    public getPower(): number {
        return OP03_010_626.power;
    }

    public getCounter(): number {
        return OP03_010_626.counter;
    }

    public getLife(): number {
        return OP03_010_626.life;
    }
}
