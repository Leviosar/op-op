
import Card, { CardType } from "../entities/Card";

export default class OP02_002_312 extends Card {
    public static id: string = "OP02_002_312";
    
    public static _name: string = "Monkey D. Garp";

    public effect: string = "[Your Turn] When you attach DON!! to this Leader or your Characters, reduce by -1 the cost of up to 1 of your opponent’s cost 7 or lower Characters during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-002_5e6d07_jp.jpg";
    
    public static type: CardType = "leader";
    
    public static cost: string = "None";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP02_002_312.id;
    }
    
    public getType() : CardType {
        return OP02_002_312.type as CardType;
    }
    
    public getImage() {
        return OP02_002_312.image;
    }
    
    public getName() {
        return OP02_002_312._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_002_312.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_002_312.keywords;
    }
}
