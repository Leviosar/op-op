
import Card, { CardType } from "../entities/Card";

export default class OP01_079_69 extends Card {
    public static id: string = "OP01_079_69";
    
    public static _name: string = "Ms. All Sunday";

    public effect: string = "<Blocker>\r\n[On K.O.] If your Leader is {Baroque Works} type, add 1 Event from your trash to your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-079_939ab9_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 1000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_079_69.id;
    }
    
    public getType() : CardType {
        return OP01_079_69.type as CardType;
    }
    
    public getImage() {
        return OP01_079_69.image;
    }
    
    public getName() {
        return OP01_079_69._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_079_69.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_079_69.keywords;
    }
    
    public getPower(): number {
        return OP01_079_69.power;
    }

    public getCounter(): number {
        return OP01_079_69.counter;
    }

    public getLife(): number {
        return OP01_079_69.life;
    }
}
