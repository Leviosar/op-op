
import Card, { CardType } from "../entities/Card";

export default class ST10_004_890 extends Card {
    public static id: string = "ST10_004_890";
    
    public static _name: string = "Sanji";

    public effect: string = "[On Play] If your opponent has a Character with 5000 or more power, this Character gains [Rush] during this turn.\r\n(This card can attack on the turn in which it is played.)";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-004_9b4b15_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST10_004_890.id;
    }
    
    public getType() : CardType {
        return ST10_004_890.type as CardType;
    }
    
    public getImage() {
        return ST10_004_890.image;
    }
    
    public getName() {
        return ST10_004_890._name;
    }
    
    public getCost(): number {
        return parseInt(ST10_004_890.cost);
    }
    
    public getKeywords(): string[] {
        return ST10_004_890.keywords;
    }
    
    public getPower(): number {
        return ST10_004_890.power;
    }

    public getCounter(): number {
        return ST10_004_890.counter;
    }

    public getLife(): number {
        return ST10_004_890.life;
    }
}
