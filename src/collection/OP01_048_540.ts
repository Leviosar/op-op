
import Card, { CardType } from "../entities/Card";

export default class OP01_048_540 extends Card {
    public static id: string = "OP01_048_540";
    
    public static _name: string = "Nekomamushi";

    public effect: string = "[On Play] Rest one of your opponent's characters that costs 3 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-048_970c1e_jp.png";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Mink Tribe","Wano Country","Nine Red Scabbards"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_048_540.id;
    }
    
    public getType() : CardType {
        return OP01_048_540.type as CardType;
    }
    
    public getImage() {
        return OP01_048_540.image;
    }
    
    public getName() {
        return OP01_048_540._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_048_540.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_048_540.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_048_540.archetypes;
    }
    
    public getPower(): number {
        return OP01_048_540.power;
    }

    public getCounter(): number {
        return OP01_048_540.counter;
    }

    public getLife(): number {
        return OP01_048_540.life;
    }
}
