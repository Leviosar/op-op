
import Card, { CardType } from "../entities/Card";

export default class OP04_068_776 extends Card {
    public static id: string = "OP04_068_776";
    
    public static _name: string = "Yokozuna";

    public effect: string = "<Blocker>\r\n[On Your Opponent's Attack] DON!! -1: Return up to 1 of your opponent's Characters with a cost of 2 or less to its owner's hand.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-068_8c1dec_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = ["Blocker"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_068_776.id;
    }
    
    public getType() : CardType {
        return OP04_068_776.type as CardType;
    }
    
    public getImage() {
        return OP04_068_776.image;
    }
    
    public getName() {
        return OP04_068_776._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_068_776.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_068_776.keywords;
    }
    
    public getPower(): number {
        return OP04_068_776.power;
    }

    public getCounter(): number {
        return OP04_068_776.counter;
    }

    public getLife(): number {
        return OP04_068_776.life;
    }
}
