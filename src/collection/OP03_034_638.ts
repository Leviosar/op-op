
import Card, { CardType } from "../entities/Card";

export default class OP03_034_638 extends Card {
    public static id: string = "OP03_034_638";
    
    public static _name: string = "Butchie";

    public effect: string = "[On Play] K.O. up to 1 of your opponent's rested Characters with a cost of 2 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-034_be5de6_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_034_638.id;
    }
    
    public getType() : CardType {
        return OP03_034_638.type as CardType;
    }
    
    public getImage() {
        return OP03_034_638.image;
    }
    
    public getName() {
        return OP03_034_638._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_034_638.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_034_638.keywords;
    }
    
    public getPower(): number {
        return OP03_034_638.power;
    }

    public getCounter(): number {
        return OP03_034_638.counter;
    }

    public getLife(): number {
        return OP03_034_638.life;
    }
}
