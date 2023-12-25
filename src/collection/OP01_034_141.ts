
import Card, { CardType } from "../entities/Card";

export default class OP01_034_141 extends Card {
    public static id: string = "OP01_034_141";
    
    public static _name: string = "Inuarashi";

    public effect: string = "[DON!! x2][When attacking] Set 1 of your DON!! as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-034_44106e_jp.png";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_034_141.id;
    }
    
    public getType() : CardType {
        return OP01_034_141.type as CardType;
    }
    
    public getImage() {
        return OP01_034_141.image;
    }
    
    public getName() {
        return OP01_034_141._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_034_141.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_034_141.keywords;
    }
    
    public getPower(): number {
        return OP01_034_141.power;
    }

    public getCounter(): number {
        return OP01_034_141.counter;
    }

    public getLife(): number {
        return OP01_034_141.life;
    }
}
