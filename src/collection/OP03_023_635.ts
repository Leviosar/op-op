
import Card, { CardType } from "../entities/Card";

export default class OP03_023_635 extends Card {
    public static id: string = "OP03_023_635";
    
    public static _name: string = "Alvida";

    public effect: string = "";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-023_d6773c_jp.png";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["East Blue","Alvida Pirates"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_023_635.id;
    }
    
    public getType() : CardType {
        return OP03_023_635.type as CardType;
    }
    
    public getImage() {
        return OP03_023_635.image;
    }
    
    public getName() {
        return OP03_023_635._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_023_635.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_023_635.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_023_635.archetypes;
    }
    
    public getPower(): number {
        return OP03_023_635.power;
    }

    public getCounter(): number {
        return OP03_023_635.counter;
    }

    public getLife(): number {
        return OP03_023_635.life;
    }
}
