
import Card, { CardType } from "../entities/Card";

export default class OP01_025_905 extends Card {
    public static id: string = "OP01_025_905";
    
    public static _name: string = "Roronoa Zoro";

    public effect: string = "This character gains <Rush> (This Character can attack the turn it enters play.)";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-025_ee96db_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Rush"];
    
    public static archetypes: string[] = ["Supernovas","Straw Hat Crew"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_025_905.id;
    }
    
    public getType() : CardType {
        return OP01_025_905.type as CardType;
    }
    
    public getImage() {
        return OP01_025_905.image;
    }
    
    public getName() {
        return OP01_025_905._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_025_905.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_025_905.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_025_905.archetypes;
    }
    
    public getPower(): number {
        return OP01_025_905.power;
    }

    public getCounter(): number {
        return OP01_025_905.counter;
    }

    public getLife(): number {
        return OP01_025_905.life;
    }
}
