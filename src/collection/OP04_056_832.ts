
import Card from "../entities/Card";

export default class OP04_056_832 extends Card {
    public static id: string = "OP04_056_832";
    
    public static _name: string = "Gum-Gum Red Roc";

    public effect: string = "[Main] Place up to 1 Character at the bottom of the owner's deck.\r\n[Trigger] Place up to 1 Character with a cost of 4 or less at the bottom of the owner's deck.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-056_61ab0c_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP04_056_832.id
    }
    
    public getType() {
        return OP04_056_832.type
    }
    
    public getImage() {
        return OP04_056_832.image
    }
    
    public getName() {
        return OP04_056_832._name
    }
}
