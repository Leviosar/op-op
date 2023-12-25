
import Card, { CardType } from "../entities/Card";

export default class ST01_002_23 extends Card {
    public static id: string = "ST01_002_23";
    
    public static _name: string = "Usopp";

    public effect: string = "[DON!!X2] (When Attacking)  You opponent cannot activate <Blocker> of 5000 or higher Power Characters during this battle.\r\n[Trigger] Play this card.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-002_0864a6_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 2000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST01_002_23.id;
    }
    
    public getType() : CardType {
        return ST01_002_23.type as CardType;
    }
    
    public getImage() {
        return ST01_002_23.image;
    }
    
    public getName() {
        return ST01_002_23._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_002_23.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_002_23.keywords;
    }
    
    public getPower(): number {
        return ST01_002_23.power;
    }

    public getCounter(): number {
        return ST01_002_23.counter;
    }

    public getLife(): number {
        return ST01_002_23.life;
    }
}
