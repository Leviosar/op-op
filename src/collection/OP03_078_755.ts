
import Card, { CardType } from "../entities/Card";

export default class OP03_078_755 extends Card {
    public static id: string = "OP03_078_755";
    
    public static _name: string = "Issho";

    public effect: string = "[DON!! x1] [Your Turn] Give all of your opponent's Characters -3 cost.\r\n[On Play] If your opponent has 6 or more cards in their hand, your opponent must trash 2 cards from their hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-078_1dcd39_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "8";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP03_078_755.id;
    }
    
    public getType() : CardType {
        return OP03_078_755.type as CardType;
    }
    
    public getImage() {
        return OP03_078_755.image;
    }
    
    public getName() {
        return OP03_078_755._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_078_755.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_078_755.keywords;
    }
}
