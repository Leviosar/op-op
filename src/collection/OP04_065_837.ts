
import Card, { CardType } from "../entities/Card";

export default class OP04_065_837 extends Card {
    public static id: string = "OP04_065_837";
    
    public static _name: string = "Ms. Golden Week (Marianne)";

    public effect: string = "[On Play] If your Leader's type includes \"Baroque Works\", up to 1 of your opponent's Characters with a cost of 5 or less cannot attack until the start of your next turn.\r\n[Trigger] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-065_083a23_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_065_837.id;
    }
    
    public getType() : CardType {
        return OP04_065_837.type as CardType;
    }
    
    public getImage() {
        return OP04_065_837.image;
    }
    
    public getName() {
        return OP04_065_837._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_065_837.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_065_837.keywords;
    }
    
    public getPower(): number {
        return OP04_065_837.power;
    }

    public getCounter(): number {
        return OP04_065_837.counter;
    }

    public getLife(): number {
        return OP04_065_837.life;
    }
}
