
import Card from "../entities/Card";

export default class OP03_060_662 extends Card {
    public static id: string = "OP03_060_662";
    
    public static _name: string = "Kalifa";

    public effect: string = "[When Attacking] DON!! -1: Draw 2 cards, then discard 1 card from hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-060_310eb5_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP03_060_662.id
    }
    
    public getType() {
        return OP03_060_662.type
    }
    
    public getImage() {
        return OP03_060_662.image
    }
    
    public getName() {
        return OP03_060_662._name
    }
    
    public getCost(): number {
        return parseInt(OP03_060_662.cost)
    }
}
