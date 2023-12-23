
import Card, { CardType } from "../entities/Card";

export default class OP02_085_322 extends Card {
    public static id: string = "OP02_085_322";
    
    public static _name: string = "Magellan";

    public effect: string = "[On Play] DON!!-1: Your opponent returns 1 of their DON!! on the field to their DON!! deck.\r\n[Opponent's Turn] When this Character is K.O.ed, your opponent returns 2 of their DON!! on the field to their DON!! deck.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-085_0b7c04_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP02_085_322.id;
    }
    
    public getType() : CardType {
        return OP02_085_322.type as CardType;
    }
    
    public getImage() {
        return OP02_085_322.image;
    }
    
    public getName() {
        return OP02_085_322._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_085_322.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_085_322.keywords;
    }
}
