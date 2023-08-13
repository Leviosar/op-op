
import Card from "../entities/Card";

export default class OP03_089_599 extends Card {
    public static id: string = "OP03_089_599";
    
    public static _name: string = "Brannew";

    public effect: string = "[On Play] Look at the top 3 cards of your deck, reveal 1 {Navy} type card other than [Brannew] and add it to your hand. Then trash the remaining cards.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-089_557b43_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_089_599.id
    }
    
    public getType() {
        return OP03_089_599.type
    }
    
    public getImage() {
        return OP03_089_599.image
    }
    
    public getName() {
        return OP03_089_599._name
    }
}
