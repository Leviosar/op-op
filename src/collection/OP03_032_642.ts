
import Card, { CardType } from "../entities/Card";

export default class OP03_032_642 extends Card {
    public static id: string = "OP03_032_642";
    
    public static _name: string = "Buggy";

    public effect: string = "This Character can't be K.O.'ed in battle with Slash attribute Characters and Leaders.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-032_3c20e4_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["East Blue","Buggy Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_032_642.id;
    }
    
    public getType() : CardType {
        return OP03_032_642.type as CardType;
    }
    
    public getImage() {
        return OP03_032_642.image;
    }
    
    public getName() {
        return OP03_032_642._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_032_642.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_032_642.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_032_642.archetypes;
    }
    
    public getPower(): number {
        return OP03_032_642.power;
    }

    public getCounter(): number {
        return OP03_032_642.counter;
    }

    public getLife(): number {
        return OP03_032_642.life;
    }
}
