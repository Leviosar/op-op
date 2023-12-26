
import Card, { CardType } from "../entities/Card";

export default class OP01_025_157 extends Card {
    public static id: string = "OP01_025_157";
    
    public static _name: string = "Roronoa Zoro";

    public effect: string = "This character gains<Rush> (This Character can attack the turn it enters play.)";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-025_186499_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Rush"];
    
    public static archetypes: string[] = ["Supernovas","Straw Hat Crew"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_025_157.id;
    }
    
    public getType() : CardType {
        return OP01_025_157.type as CardType;
    }
    
    public getImage() {
        return OP01_025_157.image;
    }
    
    public getName() {
        return OP01_025_157._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_025_157.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_025_157.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_025_157.archetypes;
    }
    
    public getPower(): number {
        return OP01_025_157.power;
    }

    public getCounter(): number {
        return OP01_025_157.counter;
    }

    public getLife(): number {
        return OP01_025_157.life;
    }
}
