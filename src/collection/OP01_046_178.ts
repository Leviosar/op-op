
import Card, { CardType } from "../entities/Card";

export default class OP01_046_178 extends Card {
    public static id: string = "OP01_046_178";
    
    public static _name: string = "Denjiro";

    public effect: string = "[DON!! x1] [When Attacking] If your Leader is [Kozuki Oden], set up to 2 of your DON!! cards as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-046_6ed435_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_046_178.id;
    }
    
    public getType() : CardType {
        return OP01_046_178.type as CardType;
    }
    
    public getImage() {
        return OP01_046_178.image;
    }
    
    public getName() {
        return OP01_046_178._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_046_178.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_046_178.keywords;
    }
    
    public getPower(): number {
        return OP01_046_178.power;
    }

    public getCounter(): number {
        return OP01_046_178.counter;
    }

    public getLife(): number {
        return OP01_046_178.life;
    }
}
