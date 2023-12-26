
import Card, { CardType } from "../entities/Card";

export default class OP01_054_183 extends Card {
    public static id: string = "OP01_054_183";
    
    public static _name: string = "X Drake";

    public effect: string = "[On Play] K.O. 1 of your opponent's rested Characters with a cost of 4 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-054_a85951_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_054_183.id;
    }
    
    public getType() : CardType {
        return OP01_054_183.type as CardType;
    }
    
    public getImage() {
        return OP01_054_183.image;
    }
    
    public getName() {
        return OP01_054_183._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_054_183.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_054_183.keywords;
    }
    
    public getPower(): number {
        return OP01_054_183.power;
    }

    public getCounter(): number {
        return OP01_054_183.counter;
    }

    public getLife(): number {
        return OP01_054_183.life;
    }
}
