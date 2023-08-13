
import Card from "../entities/Card";

export default class OP03_076_550 extends Card {
    public static id: string = "OP03_076_550";
    
    public static _name: string = "Rob Lucci";

    public effect: string = "[Your Turn] [Once per Turn] You may discard 2 cards from your hand: When an opponent's Character is K.O.ed, put this Leader to active.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-076_793a34_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return OP03_076_550.id
    }
    
    public getType() {
        return OP03_076_550.type
    }
    
    public getImage() {
        return OP03_076_550.image
    }
    
    public getName() {
        return OP03_076_550._name
    }
}
