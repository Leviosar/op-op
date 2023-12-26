
import Card, { CardType } from "../entities/Card";

export default class OP01_018_168 extends Card {
    public static id: string = "OP01_018_168";
    
    public static _name: string = "Hajrudin";

    public effect: string = "";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-018_5bc8c3_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_018_168.id;
    }
    
    public getType() : CardType {
        return OP01_018_168.type as CardType;
    }
    
    public getImage() {
        return OP01_018_168.image;
    }
    
    public getName() {
        return OP01_018_168._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_018_168.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_018_168.keywords;
    }
    
    public getPower(): number {
        return OP01_018_168.power;
    }

    public getCounter(): number {
        return OP01_018_168.counter;
    }

    public getLife(): number {
        return OP01_018_168.life;
    }
}
