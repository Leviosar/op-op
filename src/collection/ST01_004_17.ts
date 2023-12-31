
import Card, { CardType } from "../entities/Card";

export default class ST01_004_17 extends Card {
    public static id: string = "ST01_004_17";
    
    public static _name: string = "Sanji";

    public effect: string = "[DON!! x2] This character gains<Rush> (This Character can attack the turn it enters play.)\r\n";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-004_2c7061_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Rush"];
    
    public static archetypes: string[] = ["Straw Hat Crew"];
    
    public static power: number = 4000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST01_004_17.id;
    }
    
    public getType() : CardType {
        return ST01_004_17.type as CardType;
    }
    
    public getImage() {
        return ST01_004_17.image;
    }
    
    public getName() {
        return ST01_004_17._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_004_17.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_004_17.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST01_004_17.archetypes;
    }
    
    public getPower(): number {
        return ST01_004_17.power;
    }

    public getCounter(): number {
        return ST01_004_17.counter;
    }

    public getLife(): number {
        return ST01_004_17.life;
    }
}
