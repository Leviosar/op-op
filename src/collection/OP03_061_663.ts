
import Card from "../entities/Card";

export default class OP03_061_663 extends Card {
    public static id: string = "OP03_061_663";
    
    public static _name: string = "Kalifa";

    public effect: string = "[When Attacking] DON!! -1: Draw 2 cards, then discard 1 card from hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-061_5a7f6d_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_061_663.id
    }
    
    public getType() {
        return OP03_061_663.type
    }
    
    public getImage() {
        return OP03_061_663.image
    }
    
    public getName() {
        return OP03_061_663._name
    }
}
