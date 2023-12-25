
import Card, { CardType } from "../entities/Card";

export default class ST02_001_49 extends Card {
    public static id: string = "ST02_001_49";
    
    public static _name: string = "Eustass \"Captain\" Kid";

    public effect: string = "[Activate Main] (Once per Turn) (3) (Rest the indicated number of Don!! in your Cost Area) You may trash a card from your hand: Switch this Leader to Active.";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-001_bed10b_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 5;
    
    public getId() {
        return ST02_001_49.id;
    }
    
    public getType() : CardType {
        return ST02_001_49.type as CardType;
    }
    
    public getImage() {
        return ST02_001_49.image;
    }
    
    public getName() {
        return ST02_001_49._name;
    }
    
    public getCost(): number {
        return parseInt(ST02_001_49.cost);
    }
    
    public getKeywords(): string[] {
        return ST02_001_49.keywords;
    }
    
    public getPower(): number {
        return ST02_001_49.power;
    }

    public getCounter(): number {
        return ST02_001_49.counter;
    }

    public getLife(): number {
        return ST02_001_49.life;
    }
}
