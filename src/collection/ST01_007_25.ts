
import Card, { CardType } from "../entities/Card";

export default class ST01_007_25 extends Card {
    public static id: string = "ST01_007_25";
    
    public static _name: string = "Nami";

    public effect: string = "[Activate: Main][Once Per Turn] Give your Leader or 1 of your Characters 1 rested DON!! card.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-007_dec1fa_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 1000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST01_007_25.id;
    }
    
    public getType() : CardType {
        return ST01_007_25.type as CardType;
    }
    
    public getImage() {
        return ST01_007_25.image;
    }
    
    public getName() {
        return ST01_007_25._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_007_25.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_007_25.keywords;
    }
    
    public getPower(): number {
        return ST01_007_25.power;
    }

    public getCounter(): number {
        return ST01_007_25.counter;
    }

    public getLife(): number {
        return ST01_007_25.life;
    }
}
