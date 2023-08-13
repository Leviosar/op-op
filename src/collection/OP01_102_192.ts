
import Card from "../entities/Card";

export default class OP01_102_192 extends Card {
    public static id: string = "OP01_102_192";
    
    public static _name: string = "Jack";

    public effect: string = "[When Attacking] DON!!-1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Your opponent trashes 1 card from their hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-102_168410_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_102_192.id
    }
    
    public getType() {
        return OP01_102_192.type
    }
    
    public getImage() {
        return OP01_102_192.image
    }
    
    public getName() {
        return OP01_102_192._name
    }
}
