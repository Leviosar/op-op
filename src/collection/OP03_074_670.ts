
import Card from "../entities/Card";

export default class OP03_074_670 extends Card {
    public static id: string = "OP03_074_670";
    
    public static _name: string = "Top Knot";

    public effect: string = "[Main] DON!! -1: Return up to 1 of your opponent's Characters with a cost of 4 or less to the bottom of its owner's deck.\r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-074_3c3023_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP03_074_670.id
    }
    
    public getType() {
        return OP03_074_670.type
    }
    
    public getImage() {
        return OP03_074_670.image
    }
    
    public getName() {
        return OP03_074_670._name
    }
}
