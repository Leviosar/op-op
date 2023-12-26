
import Card, { CardType } from "../entities/Card";

export default class ST01_010_242 extends Card {
    public static id: string = "ST01_010_242";
    
    public static _name: string = "Franky";

    public effect: string = "";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-010_c7e0bb_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST01_010_242.id;
    }
    
    public getType() : CardType {
        return ST01_010_242.type as CardType;
    }
    
    public getImage() {
        return ST01_010_242.image;
    }
    
    public getName() {
        return ST01_010_242._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_010_242.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_010_242.keywords;
    }
    
    public getPower(): number {
        return ST01_010_242.power;
    }

    public getCounter(): number {
        return ST01_010_242.counter;
    }

    public getLife(): number {
        return ST01_010_242.life;
    }
}
