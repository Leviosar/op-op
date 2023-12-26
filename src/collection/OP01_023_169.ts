
import Card, { CardType } from "../entities/Card";

export default class OP01_023_169 extends Card {
    public static id: string = "OP01_023_169";
    
    public static _name: string = "Marco";

    public effect: string = "";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-023_eeb5a3_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Former Whitebeard Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_023_169.id;
    }
    
    public getType() : CardType {
        return OP01_023_169.type as CardType;
    }
    
    public getImage() {
        return OP01_023_169.image;
    }
    
    public getName() {
        return OP01_023_169._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_023_169.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_023_169.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_023_169.archetypes;
    }
    
    public getPower(): number {
        return OP01_023_169.power;
    }

    public getCounter(): number {
        return OP01_023_169.counter;
    }

    public getLife(): number {
        return OP01_023_169.life;
    }
}
