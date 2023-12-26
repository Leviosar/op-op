
import Card, { CardType } from "../entities/Card";

export default class OP02_105_316 extends Card {
    public static id: string = "OP02_105_316";
    
    public static _name: string = "Tashigi";

    public effect: string = "[DON!! ×1] [When Attacking] Give up to 1 of your opponent's Characters -3 to their cost during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-105_2a0401_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_105_316.id;
    }
    
    public getType() : CardType {
        return OP02_105_316.type as CardType;
    }
    
    public getImage() {
        return OP02_105_316.image;
    }
    
    public getName() {
        return OP02_105_316._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_105_316.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_105_316.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_105_316.archetypes;
    }
    
    public getPower(): number {
        return OP02_105_316.power;
    }

    public getCounter(): number {
        return OP02_105_316.counter;
    }

    public getLife(): number {
        return OP02_105_316.life;
    }
}
