
import Card from "../entities/Card";

export default class OP03_096_683 extends Card {
    public static id: string = "OP03_096_683";
    
    public static _name: string = "Tempest Kick Sky Slicer";

    public effect: string = "[Main] K.O. up to 1 of your opponents Characters with a Cost of 0 or Stages with a Cost of 3 or less.\r\n[Trigger] Draw 2 cards.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-096_b16081_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP03_096_683.id
    }
    
    public getType() {
        return OP03_096_683.type
    }
    
    public getImage() {
        return OP03_096_683.image
    }
    
    public getName() {
        return OP03_096_683._name
    }
}
