
import Card, { CardType } from "../entities/Card";

export default class OP02_054_469 extends Card {
    public static id: string = "OP02_054_469";
    
    public static _name: string = "Cabaji";

    public effect: string = "[On Play] If you have [Mohji], draw 2 cards and trash 1 card from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-054_644d46_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP02_054_469.id;
    }
    
    public getType() : CardType {
        return OP02_054_469.type as CardType;
    }
    
    public getImage() {
        return OP02_054_469.image;
    }
    
    public getName() {
        return OP02_054_469._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_054_469.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_054_469.keywords;
    }
}
