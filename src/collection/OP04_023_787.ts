
import Card, { CardType } from "../entities/Card";

export default class OP04_023_787 extends Card {
    public static id: string = "OP04_023_787";
    
    public static _name: string = "Kuro";

    public effect: string = "";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-023_6db0e9_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public static power: number = 8000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_023_787.id;
    }
    
    public getType() : CardType {
        return OP04_023_787.type as CardType;
    }
    
    public getImage() {
        return OP04_023_787.image;
    }
    
    public getName() {
        return OP04_023_787._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_023_787.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_023_787.keywords;
    }
    
    public getPower(): number {
        return OP04_023_787.power;
    }

    public getCounter(): number {
        return OP04_023_787.counter;
    }

    public getLife(): number {
        return OP04_023_787.life;
    }
}
