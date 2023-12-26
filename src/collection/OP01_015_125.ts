
import Card, { CardType } from "../entities/Card";

export default class OP01_015_125 extends Card {
    public static id: string = "OP01_015_125";
    
    public static _name: string = "Tony Tony Chopper";

    public effect: string = "[DON!!x1] [When Attacking] (Trash 1 of your cards from your hand): Put one {Straw Hat Crew} type Character other than (Tony Tony Chopper) that costs 4 or less from your Trash into your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-015_ee0a93_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_015_125.id;
    }
    
    public getType() : CardType {
        return OP01_015_125.type as CardType;
    }
    
    public getImage() {
        return OP01_015_125.image;
    }
    
    public getName() {
        return OP01_015_125._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_015_125.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_015_125.keywords;
    }
    
    public getPower(): number {
        return OP01_015_125.power;
    }

    public getCounter(): number {
        return OP01_015_125.counter;
    }

    public getLife(): number {
        return OP01_015_125.life;
    }
}
