
import Card, { CardType } from "../entities/Card";

export default class OP03_049_652 extends Card {
    public static id: string = "OP03_049_652";
    
    public static _name: string = "Patty";

    public effect: string = "[On Play] If your deck has 20 or less cards, you may return up to 1 Character with a cost of 3 or less to its owner's hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-049_98288d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP03_049_652.id;
    }
    
    public getType() : CardType {
        return OP03_049_652.type as CardType;
    }
    
    public getImage() {
        return OP03_049_652.image;
    }
    
    public getName() {
        return OP03_049_652._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_049_652.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_049_652.keywords;
    }
}
