
import Card, { CardType } from "../entities/Card";

export default class OP01_043_177 extends Card {
    public static id: string = "OP01_043_177";
    
    public static _name: string = "Shinobu";

    public effect: string = "";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-043_d842d7_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_043_177.id;
    }
    
    public getType() : CardType {
        return OP01_043_177.type as CardType;
    }
    
    public getImage() {
        return OP01_043_177.image;
    }
    
    public getName() {
        return OP01_043_177._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_043_177.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_043_177.keywords;
    }
    
    public getPower(): number {
        return OP01_043_177.power;
    }

    public getCounter(): number {
        return OP01_043_177.counter;
    }

    public getLife(): number {
        return OP01_043_177.life;
    }
}
