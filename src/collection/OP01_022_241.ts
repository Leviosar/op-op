
import Card, { CardType } from "../entities/Card";

export default class OP01_022_241 extends Card {
    public static id: string = "OP01_022_241";
    
    public static _name: string = "Brook";

    public effect: string = "[DON!!x1] [When Attacking] Up to two of your opponent's characters: -2000 power for this turn.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-022_7120cd_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_022_241.id;
    }
    
    public getType() : CardType {
        return OP01_022_241.type as CardType;
    }
    
    public getImage() {
        return OP01_022_241.image;
    }
    
    public getName() {
        return OP01_022_241._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_022_241.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_022_241.keywords;
    }
    
    public getPower(): number {
        return OP01_022_241.power;
    }

    public getCounter(): number {
        return OP01_022_241.counter;
    }

    public getLife(): number {
        return OP01_022_241.life;
    }
}
