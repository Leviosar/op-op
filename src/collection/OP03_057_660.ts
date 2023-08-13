
import Card from "../entities/Card";

export default class OP03_057_660 extends Card {
    public static id: string = "OP03_057_660";
    
    public static _name: string = "Three Thousand Worlds";

    public effect: string = "[Main] Place up to 1 Character with a cost of 5 or less at the bottom of its owner's deck.\r\n\r\n[Trigger] Place up to 1 Character with a cost of 3 or less at the bottom of its owner's deck.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-057_8e0c4c_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP03_057_660.id
    }
    
    public getType() {
        return OP03_057_660.type
    }
    
    public getImage() {
        return OP03_057_660.image
    }
    
    public getName() {
        return OP03_057_660._name
    }
}
