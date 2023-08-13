
import Card from "../entities/Card";

export default class OP03_082_672 extends Card {
    public static id: string = "OP03_082_672";
    
    public static _name: string = "Issho";

    public effect: string = "[DON!! x1] [Your Turn] Give all of your opponent's Characters -3 cost.\r\n[On Play] If your opponent has 6 or more cards in their hand, your opponent must trash 2 cards from their hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-082_4d66c2_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_082_672.id
    }
    
    public getType() {
        return OP03_082_672.type
    }
    
    public getImage() {
        return OP03_082_672.image
    }
    
    public getName() {
        return OP03_082_672._name
    }
}
