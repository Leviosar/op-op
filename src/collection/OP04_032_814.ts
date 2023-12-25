
import Card, { CardType } from "../entities/Card";

export default class OP04_032_814 extends Card {
    public static id: string = "OP04_032_814";
    
    public static _name: string = "Baby 5";

    public effect: string = "[End of Your Turn] You may trash this Character: Set up to 2 of your DON!! cards as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-032_5f601b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 1000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_032_814.id;
    }
    
    public getType() : CardType {
        return OP04_032_814.type as CardType;
    }
    
    public getImage() {
        return OP04_032_814.image;
    }
    
    public getName() {
        return OP04_032_814._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_032_814.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_032_814.keywords;
    }
    
    public getPower(): number {
        return OP04_032_814.power;
    }

    public getCounter(): number {
        return OP04_032_814.counter;
    }

    public getLife(): number {
        return OP04_032_814.life;
    }
}
