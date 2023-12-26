
import Card, { CardType } from "../entities/Card";

export default class OP01_092_205 extends Card {
    public static id: string = "OP01_092_205";
    
    public static _name: string = "Urashima";

    public effect: string = "";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-092_8df8b7_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = [];
    
    public static power: number = 9000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_092_205.id;
    }
    
    public getType() : CardType {
        return OP01_092_205.type as CardType;
    }
    
    public getImage() {
        return OP01_092_205.image;
    }
    
    public getName() {
        return OP01_092_205._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_092_205.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_092_205.keywords;
    }
    
    public getPower(): number {
        return OP01_092_205.power;
    }

    public getCounter(): number {
        return OP01_092_205.counter;
    }

    public getLife(): number {
        return OP01_092_205.life;
    }
}
