
import Card, { CardType } from "../entities/Card";

export default class ST05_015_255 extends Card {
    public static id: string = "ST05_015_255";
    
    public static _name: string = "Dr. Indigo";

    public effect: string = "";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-015_cc9b87_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST05_015_255.id;
    }
    
    public getType() : CardType {
        return ST05_015_255.type as CardType;
    }
    
    public getImage() {
        return ST05_015_255.image;
    }
    
    public getName() {
        return ST05_015_255._name;
    }
    
    public getCost(): number {
        return parseInt(ST05_015_255.cost);
    }
    
    public getKeywords(): string[] {
        return ST05_015_255.keywords;
    }
    
    public getPower(): number {
        return ST05_015_255.power;
    }

    public getCounter(): number {
        return ST05_015_255.counter;
    }

    public getLife(): number {
        return ST05_015_255.life;
    }
}
