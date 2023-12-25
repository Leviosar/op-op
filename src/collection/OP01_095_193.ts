
import Card, { CardType } from "../entities/Card";

export default class OP01_095_193 extends Card {
    public static id: string = "OP01_095_193";
    
    public static _name: string = "Kyoshirou";

    public effect: string = "[On Play] If you have 8 or more DON!! cards on your field, draw 1 card";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-095_c7eef3_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_095_193.id;
    }
    
    public getType() : CardType {
        return OP01_095_193.type as CardType;
    }
    
    public getImage() {
        return OP01_095_193.image;
    }
    
    public getName() {
        return OP01_095_193._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_095_193.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_095_193.keywords;
    }
    
    public getPower(): number {
        return OP01_095_193.power;
    }

    public getCounter(): number {
        return OP01_095_193.counter;
    }

    public getLife(): number {
        return OP01_095_193.life;
    }
}
