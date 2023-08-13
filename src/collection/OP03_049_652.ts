
import Card from "../entities/Card";

export default class OP03_049_652 extends Card {
    public static id: string = "OP03_049_652";
    
    public static _name: string = "Patty";

    public effect: string = "[On Play] If your deck has 20 or less cards, you may return up to 1 Character with a cost of 3 or less to its owner's hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-049_98288d_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_049_652.id
    }
    
    public getType() {
        return OP03_049_652.type
    }
    
    public getImage() {
        return OP03_049_652.image
    }
    
    public getName() {
        return OP03_049_652._name
    }
}
