
import Card, { CardType } from "../entities/Card";

export default class OP01_056_185 extends Card {
    public static id: string = "OP01_056_185";
    
    public static _name: string = "Demon Face";

    public effect: string = "[Main] K.O. 2 of your opponent's rested Characters with a cost of 5 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-056_7b72b0_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Supernovas","Hawkins Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_056_185.id;
    }
    
    public getType() : CardType {
        return OP01_056_185.type as CardType;
    }
    
    public getImage() {
        return OP01_056_185.image;
    }
    
    public getName() {
        return OP01_056_185._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_056_185.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_056_185.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_056_185.archetypes;
    }
    
    public getPower(): number {
        return OP01_056_185.power;
    }

    public getCounter(): number {
        return OP01_056_185.counter;
    }

    public getLife(): number {
        return OP01_056_185.life;
    }
}
