
import Card from "../entities/Card";

export default class OP03_078_671 extends Card {
    public static id: string = "OP03_078_671";
    
    public static _name: string = "Issho";

    public effect: string = "[DON!! x1] [Your Turn] Give all of your opponent's Characters -3 cost.\r\n[On Play] If your opponent has 6 or more cards in their hand, your opponent must trash 2 cards from their hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-078_6e1ca3_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "8";
    
    public getId() {
        return OP03_078_671.id
    }
    
    public getType() {
        return OP03_078_671.type
    }
    
    public getImage() {
        return OP03_078_671.image
    }
    
    public getName() {
        return OP03_078_671._name
    }
    
    public getCost(): number {
        return parseInt(OP03_078_671.cost)
    }
}
