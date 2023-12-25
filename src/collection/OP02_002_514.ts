
import Card, { CardType } from "../entities/Card";

export default class OP02_002_514 extends Card {
    public static id: string = "OP02_002_514";
    
    public static _name: string = "Monkey D. Garp";

    public effect: string = "[Your Turn] When you attach DON!! to this Leader or your Characters, reduce by -1 the cost of up to 1 of your opponent’s cost 7 or lower Characters during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-002_b4e773_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public static power: number = 5000;

    public static counter: number = 0;
    
    public static life: number = 4;
    
    public getId() {
        return OP02_002_514.id;
    }
    
    public getType() : CardType {
        return OP02_002_514.type as CardType;
    }
    
    public getImage() {
        return OP02_002_514.image;
    }
    
    public getName() {
        return OP02_002_514._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_002_514.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_002_514.keywords;
    }
    
    public getPower(): number {
        return OP02_002_514.power;
    }

    public getCounter(): number {
        return OP02_002_514.counter;
    }

    public getLife(): number {
        return OP02_002_514.life;
    }
}
