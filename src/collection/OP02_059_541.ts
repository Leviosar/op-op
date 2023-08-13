
import Card from "../entities/Card";

export default class OP02_059_541 extends Card {
    public static id: string = "OP02_059_541";
    
    public static _name: string = "Boa Hancock";

    public effect: string = "[When Attacking] Draw 1 card and trash 1 card from your hand. Then, trash up to 3 cards from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-059_4ef953_jp.png";
    
    public static type = "char";
    
    public getId() {
        return OP02_059_541.id
    }
    
    public getType() {
        return OP02_059_541.type
    }
    
    public getImage() {
        return OP02_059_541.image
    }
    
    public getName() {
        return OP02_059_541._name
    }
}
