
import Card, { CardType } from "../entities/Card";

export default class ST04_007_31 extends Card {
    public static id: string = "ST04_007_31";
    
    public static _name: string = "Sheepshead ";

    public effect: string = "";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-007_0ad50d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Animal Kingdom Pirates","SMILE"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST04_007_31.id;
    }
    
    public getType() : CardType {
        return ST04_007_31.type as CardType;
    }
    
    public getImage() {
        return ST04_007_31.image;
    }
    
    public getName() {
        return ST04_007_31._name;
    }
    
    public getCost(): number {
        return parseInt(ST04_007_31.cost);
    }
    
    public getKeywords(): string[] {
        return ST04_007_31.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST04_007_31.archetypes;
    }
    
    public getPower(): number {
        return ST04_007_31.power;
    }

    public getCounter(): number {
        return ST04_007_31.counter;
    }

    public getLife(): number {
        return ST04_007_31.life;
    }
}
