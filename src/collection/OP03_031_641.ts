
import Card, { CardType } from "../entities/Card";

export default class OP03_031_641 extends Card {
    public static id: string = "OP03_031_641";
    
    public static _name: string = "Pearl";

    public effect: string = "<Blocker>";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-031_712412_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetypes: string[] = ["East Blue","Krieg Pirates"];
    
    public static power: number = 2000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_031_641.id;
    }
    
    public getType() : CardType {
        return OP03_031_641.type as CardType;
    }
    
    public getImage() {
        return OP03_031_641.image;
    }
    
    public getName() {
        return OP03_031_641._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_031_641.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_031_641.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_031_641.archetypes;
    }
    
    public getPower(): number {
        return OP03_031_641.power;
    }

    public getCounter(): number {
        return OP03_031_641.counter;
    }

    public getLife(): number {
        return OP03_031_641.life;
    }
}
