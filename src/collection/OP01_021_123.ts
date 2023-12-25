
import Card, { CardType } from "../entities/Card";

export default class OP01_021_123 extends Card {
    public static id: string = "OP01_021_123";
    
    public static _name: string = "Franky";

    public effect: string = "[DON!!x1] This character can attack your opponent's active characters.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-021_ba1620_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_021_123.id;
    }
    
    public getType() : CardType {
        return OP01_021_123.type as CardType;
    }
    
    public getImage() {
        return OP01_021_123.image;
    }
    
    public getName() {
        return OP01_021_123._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_021_123.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_021_123.keywords;
    }
    
    public getPower(): number {
        return OP01_021_123.power;
    }

    public getCounter(): number {
        return OP01_021_123.counter;
    }

    public getLife(): number {
        return OP01_021_123.life;
    }
}
