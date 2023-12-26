
import Card, { CardType } from "../entities/Card";

export default class OP01_045_64 extends Card {
    public static id: string = "OP01_045_64";
    
    public static _name: string = "Jean Bart";

    public effect: string = "";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-045_36eb89_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Heart Pirates"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_045_64.id;
    }
    
    public getType() : CardType {
        return OP01_045_64.type as CardType;
    }
    
    public getImage() {
        return OP01_045_64.image;
    }
    
    public getName() {
        return OP01_045_64._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_045_64.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_045_64.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_045_64.archetypes;
    }
    
    public getPower(): number {
        return OP01_045_64.power;
    }

    public getCounter(): number {
        return OP01_045_64.counter;
    }

    public getLife(): number {
        return OP01_045_64.life;
    }
}
