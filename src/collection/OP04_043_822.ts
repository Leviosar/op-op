
import Card from "../entities/Card";

export default class OP04_043_822 extends Card {
    public static id: string = "OP04_043_822";
    
    public static _name: string = "Ulti";

    public effect: string = "[DON!! x1] [When Attacking] Return up to 1 Character with a cost of 2 or less to the owner's hand or the bottom of their deck.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-043_de3c14_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_043_822.id
    }
    
    public getType() {
        return OP04_043_822.type
    }
    
    public getImage() {
        return OP04_043_822.image
    }
    
    public getName() {
        return OP04_043_822._name
    }
}
