
import Card, { CardType } from "../entities/Card";

export default class ST01_009_26 extends Card {
    public static id: string = "ST01_009_26";
    
    public static _name: string = "Nami";

    public effect: string = "[Activate: Main][Once Per Turn] Give your Leader or 1 of your Characters 1 rested DON!! card.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-009_137f78_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 4000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST01_009_26.id;
    }
    
    public getType() : CardType {
        return ST01_009_26.type as CardType;
    }
    
    public getImage() {
        return ST01_009_26.image;
    }
    
    public getName() {
        return ST01_009_26._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_009_26.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_009_26.keywords;
    }
    
    public getPower(): number {
        return ST01_009_26.power;
    }

    public getCounter(): number {
        return ST01_009_26.counter;
    }

    public getLife(): number {
        return ST01_009_26.life;
    }
}
