
import Card from "../entities/Card";

export default class OP03_081_616 extends Card {
    public static id: string = "OP03_081_616";
    
    public static _name: string = "Kalifa";

    public effect: string = "[On Play] Draw 2 cards, and trash 2 cards from your hand. Then, reduce the cost of up to 1 of your opponent's Characters by 2 for the turn.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-081_19ee45_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_081_616.id
    }
    
    public getType() {
        return OP03_081_616.type
    }
    
    public getImage() {
        return OP03_081_616.image
    }
    
    public getName() {
        return OP03_081_616._name
    }
}
