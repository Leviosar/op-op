
import Card, { CardType } from "../entities/Card";

export default class OP03_009_625 extends Card {
    public static id: string = "OP03_009_625";
    
    public static _name: string = "Haruta";

    public effect: string = "[Activate: Main][Once Per Turn] Give your Leader or 1 of your Characters 1 rested DON!! card.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-009_f1587e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Whitebeard Pirates"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_009_625.id;
    }
    
    public getType() : CardType {
        return OP03_009_625.type as CardType;
    }
    
    public getImage() {
        return OP03_009_625.image;
    }
    
    public getName() {
        return OP03_009_625._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_009_625.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_009_625.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_009_625.archetypes;
    }
    
    public getPower(): number {
        return OP03_009_625.power;
    }

    public getCounter(): number {
        return OP03_009_625.counter;
    }

    public getLife(): number {
        return OP03_009_625.life;
    }
}
