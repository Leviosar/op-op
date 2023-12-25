
import Card, { CardType } from "../entities/Card";

export default class ST01_014_6 extends Card {
    public static id: string = "ST01_014_6";
    
    public static _name: string = "Guard Point";

    public effect: string = "[Counter] Your Leader or 1 of your Characters gains +3000 power during this battle.\r\n[Trigger] Your Leader or 1 of your Characters gains +1000 power during this turn.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-014_237f36_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST01_014_6.id;
    }
    
    public getType() : CardType {
        return ST01_014_6.type as CardType;
    }
    
    public getImage() {
        return ST01_014_6.image;
    }
    
    public getName() {
        return ST01_014_6._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_014_6.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_014_6.keywords;
    }
    
    public getPower(): number {
        return ST01_014_6.power;
    }

    public getCounter(): number {
        return ST01_014_6.counter;
    }

    public getLife(): number {
        return ST01_014_6.life;
    }
}
