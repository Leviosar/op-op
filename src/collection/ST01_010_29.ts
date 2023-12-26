
import Card, { CardType } from "../entities/Card";

export default class ST01_010_29 extends Card {
    public static id: string = "ST01_010_29";
    
    public static _name: string = "Franky";

    public effect: string = "";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-010_8266c1_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Straw Hat Crew"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST01_010_29.id;
    }
    
    public getType() : CardType {
        return ST01_010_29.type as CardType;
    }
    
    public getImage() {
        return ST01_010_29.image;
    }
    
    public getName() {
        return ST01_010_29._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_010_29.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_010_29.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST01_010_29.archetypes;
    }
    
    public getPower(): number {
        return ST01_010_29.power;
    }

    public getCounter(): number {
        return ST01_010_29.counter;
    }

    public getLife(): number {
        return ST01_010_29.life;
    }
}
