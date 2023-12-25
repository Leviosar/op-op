
import Card, { CardType } from "../entities/Card";

export default class OP01_120_256 extends Card {
    public static id: string = "OP01_120_256";
    
    public static _name: string = "Shanks";

    public effect: string = "<Rush> (This card can attack on the turn in which it is played.)\r\n[When Attacking] During this battle, your opponent can not activate <Blocker> of Characters with 2000 power or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-120_1ca474_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "9";
    
    public static keywords: string[] = ["Rush> (This card can attack on the turn in which it is played.)\r\n[When Attacking] During this battle, your opponent can not activate <Blocker"];
    
    public static power: number = 10000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_120_256.id;
    }
    
    public getType() : CardType {
        return OP01_120_256.type as CardType;
    }
    
    public getImage() {
        return OP01_120_256.image;
    }
    
    public getName() {
        return OP01_120_256._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_120_256.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_120_256.keywords;
    }
    
    public getPower(): number {
        return OP01_120_256.power;
    }

    public getCounter(): number {
        return OP01_120_256.counter;
    }

    public getLife(): number {
        return OP01_120_256.life;
    }
}
