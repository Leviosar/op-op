
import Card, { CardType } from "../entities/Card";

export default class OP01_070_221 extends Card {
    public static id: string = "OP01_070_221";
    
    public static _name: string = "Dracule Mihawk";

    public effect: string = "[On Play] Place up to 1 Character with a cost of 7 or less at the bottom of the owner's deck.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-070_7212ff_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "9";
    
    public static keywords: string[] = [];
    
    public static power: number = 9000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_070_221.id;
    }
    
    public getType() : CardType {
        return OP01_070_221.type as CardType;
    }
    
    public getImage() {
        return OP01_070_221.image;
    }
    
    public getName() {
        return OP01_070_221._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_070_221.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_070_221.keywords;
    }
    
    public getPower(): number {
        return OP01_070_221.power;
    }

    public getCounter(): number {
        return OP01_070_221.counter;
    }

    public getLife(): number {
        return OP01_070_221.life;
    }
}
