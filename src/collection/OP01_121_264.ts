
import Card, { CardType } from "../entities/Card";

export default class OP01_121_264 extends Card {
    public static id: string = "OP01_121_264";
    
    public static _name: string = "Yamato";

    public effect: string = "This card's name is also treated as (Kozuki Oden).\r\n<Double Attack>\r\n<Banish>";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-121_79b3f5_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = ["Double Attack>\r\n<Banish"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_121_264.id;
    }
    
    public getType() : CardType {
        return OP01_121_264.type as CardType;
    }
    
    public getImage() {
        return OP01_121_264.image;
    }
    
    public getName() {
        return OP01_121_264._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_121_264.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_121_264.keywords;
    }
    
    public getPower(): number {
        return OP01_121_264.power;
    }

    public getCounter(): number {
        return OP01_121_264.counter;
    }

    public getLife(): number {
        return OP01_121_264.life;
    }
}
