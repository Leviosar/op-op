
import Card from "../entities/Card";

export default class OP03_095_682 extends Card {
    public static id: string = "OP03_095_682";
    
    public static _name: string = "Soap Sheep";

    public effect: string = "[Main] Give up to 2 of your opponent's Characters -2 Cost during this turn.\r\n[Trigger] Your opponent trashes 1 card from their hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-095_c12584_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP03_095_682.id
    }
    
    public getType() {
        return OP03_095_682.type
    }
    
    public getImage() {
        return OP03_095_682.image
    }
    
    public getName() {
        return OP03_095_682._name
    }
}
