
import Card, { CardType } from "../entities/Card";

export default class OP01_036_173 extends Card {
    public static id: string = "OP01_036_173";
    
    public static _name: string = "Otsuru";

    public effect: string = "";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-036_e4bbd4_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Wano Country"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_036_173.id;
    }
    
    public getType() : CardType {
        return OP01_036_173.type as CardType;
    }
    
    public getImage() {
        return OP01_036_173.image;
    }
    
    public getName() {
        return OP01_036_173._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_036_173.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_036_173.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_036_173.archetypes;
    }
    
    public getPower(): number {
        return OP01_036_173.power;
    }

    public getCounter(): number {
        return OP01_036_173.counter;
    }

    public getLife(): number {
        return OP01_036_173.life;
    }
}
