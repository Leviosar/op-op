
import Card, { CardType } from "../entities/Card";

export default class OP01_033_286 extends Card {
    public static id: string = "OP01_033_286";
    
    public static _name: string = "Izou";

    public effect: string = "[On Play] Rest 1 of your opponent's Characters with a cost of 4 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-033_72a68d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Wano Country","Former Whitebeard Pirates"];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_033_286.id;
    }
    
    public getType() : CardType {
        return OP01_033_286.type as CardType;
    }
    
    public getImage() {
        return OP01_033_286.image;
    }
    
    public getName() {
        return OP01_033_286._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_033_286.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_033_286.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_033_286.archetypes;
    }
    
    public getPower(): number {
        return OP01_033_286.power;
    }

    public getCounter(): number {
        return OP01_033_286.counter;
    }

    public getLife(): number {
        return OP01_033_286.life;
    }
}
