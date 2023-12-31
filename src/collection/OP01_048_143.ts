
import Card, { CardType } from "../entities/Card";

export default class OP01_048_143 extends Card {
    public static id: string = "OP01_048_143";
    
    public static _name: string = "Nekomamushi";

    public effect: string = "[On Play] Rest one of your opponent's characters that costs 3 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-048_b74b29_jp.png";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Mink Tribe","Wano Country","Nine Red Scabbards"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_048_143.id;
    }
    
    public getType() : CardType {
        return OP01_048_143.type as CardType;
    }
    
    public getImage() {
        return OP01_048_143.image;
    }
    
    public getName() {
        return OP01_048_143._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_048_143.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_048_143.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_048_143.archetypes;
    }
    
    public getPower(): number {
        return OP01_048_143.power;
    }

    public getCounter(): number {
        return OP01_048_143.counter;
    }

    public getLife(): number {
        return OP01_048_143.life;
    }
}
