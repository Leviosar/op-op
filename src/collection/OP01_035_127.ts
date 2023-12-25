
import Card, { CardType } from "../entities/Card";

export default class OP01_035_127 extends Card {
    public static id: string = "OP01_035_127";
    
    public static _name: string = "Okiku";

    public effect: string = "[DONx1!!] [When Attacking] [Once Per Turn] Rest 1 of your opponent's Characters that costs 5 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-035_dfd5c8_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_035_127.id;
    }
    
    public getType() : CardType {
        return OP01_035_127.type as CardType;
    }
    
    public getImage() {
        return OP01_035_127.image;
    }
    
    public getName() {
        return OP01_035_127._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_035_127.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_035_127.keywords;
    }
    
    public getPower(): number {
        return OP01_035_127.power;
    }

    public getCounter(): number {
        return OP01_035_127.counter;
    }

    public getLife(): number {
        return OP01_035_127.life;
    }
}
