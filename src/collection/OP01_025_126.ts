
import Card, { CardType } from "../entities/Card";

export default class OP01_025_126 extends Card {
    public static id: string = "OP01_025_126";
    
    public static _name: string = "Roronoa Zoro";

    public effect: string = "This character gains<Rush> (This Character can attack the turn it enters play.)";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-025_57ea81_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Rush"];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_025_126.id;
    }
    
    public getType() : CardType {
        return OP01_025_126.type as CardType;
    }
    
    public getImage() {
        return OP01_025_126.image;
    }
    
    public getName() {
        return OP01_025_126._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_025_126.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_025_126.keywords;
    }
    
    public getPower(): number {
        return OP01_025_126.power;
    }

    public getCounter(): number {
        return OP01_025_126.counter;
    }

    public getLife(): number {
        return OP01_025_126.life;
    }
}
