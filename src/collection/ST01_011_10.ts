
import Card, { CardType } from "../entities/Card";

export default class ST01_011_10 extends Card {
    public static id: string = "ST01_011_10";
    
    public static _name: string = "Brook";

    public effect: string = "[On Play] Give your Leader or one of your Characters 2 rested DON!! cards.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-011_bfdc0f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return ST01_011_10.id;
    }
    
    public getType() : CardType {
        return ST01_011_10.type as CardType;
    }
    
    public getImage() {
        return ST01_011_10.image;
    }
    
    public getName() {
        return ST01_011_10._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_011_10.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_011_10.keywords;
    }
    
    public getPower(): number {
        return ST01_011_10.power;
    }

    public getCounter(): number {
        return ST01_011_10.counter;
    }

    public getLife(): number {
        return ST01_011_10.life;
    }
}
