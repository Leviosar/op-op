
import Card, { CardType } from "../entities/Card";

export default class OP01_066_189 extends Card {
    public static id: string = "OP01_066_189";
    
    public static _name: string = "Krieg";

    public effect: string = "";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-066_aeef5d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_066_189.id;
    }
    
    public getType() : CardType {
        return OP01_066_189.type as CardType;
    }
    
    public getImage() {
        return OP01_066_189.image;
    }
    
    public getName() {
        return OP01_066_189._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_066_189.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_066_189.keywords;
    }
    
    public getPower(): number {
        return OP01_066_189.power;
    }

    public getCounter(): number {
        return OP01_066_189.counter;
    }

    public getLife(): number {
        return OP01_066_189.life;
    }
}
