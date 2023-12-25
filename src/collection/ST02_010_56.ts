
import Card, { CardType } from "../entities/Card";

export default class ST02_010_56 extends Card {
    public static id: string = "ST02_010_56";
    
    public static _name: string = "Basil Hawkins";

    public effect: string = "[DON!!x1] [Once Per turn] [Your Turn] If this Character battles your opponent's Character, set this card as active.";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-010_1a03c3_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST02_010_56.id;
    }
    
    public getType() : CardType {
        return ST02_010_56.type as CardType;
    }
    
    public getImage() {
        return ST02_010_56.image;
    }
    
    public getName() {
        return ST02_010_56._name;
    }
    
    public getCost(): number {
        return parseInt(ST02_010_56.cost);
    }
    
    public getKeywords(): string[] {
        return ST02_010_56.keywords;
    }
    
    public getPower(): number {
        return ST02_010_56.power;
    }

    public getCounter(): number {
        return ST02_010_56.counter;
    }

    public getLife(): number {
        return ST02_010_56.life;
    }
}
