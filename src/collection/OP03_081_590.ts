
import Card from "../entities/Card";

export default class OP03_081_590 extends Card {
    public static id: string = "OP03_081_590";
    
    public static _name: string = "Kalifa";

    public effect: string = "[On Play] Draw 2 cards, and trash 2 cards from your hand. Then, reduce the cost of up to 1 of your opponent's Characters by 2 for the turn.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-081_0bcc6e_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP03_081_590.id
    }
    
    public getType() {
        return OP03_081_590.type
    }
    
    public getImage() {
        return OP03_081_590.image
    }
    
    public getName() {
        return OP03_081_590._name
    }
    
    public getCost(): number {
        return parseInt(OP03_081_590.cost)
    }
}
