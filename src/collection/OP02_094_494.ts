
import Card, { CardType } from "../entities/Card";

export default class OP02_094_494 extends Card {
    public static id: string = "OP02_094_494";
    
    public static _name: string = "Isuka";

    public effect: string = "[DON!! x1] [Once Per Turn] When this Character battles and K.O.'s your opponent's Character, set this Character as active.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-094_b5be75_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_094_494.id;
    }
    
    public getType() : CardType {
        return OP02_094_494.type as CardType;
    }
    
    public getImage() {
        return OP02_094_494.image;
    }
    
    public getName() {
        return OP02_094_494._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_094_494.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_094_494.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_094_494.archetypes;
    }
    
    public getPower(): number {
        return OP02_094_494.power;
    }

    public getCounter(): number {
        return OP02_094_494.counter;
    }

    public getLife(): number {
        return OP02_094_494.life;
    }
}
