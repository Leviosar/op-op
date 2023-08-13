
import Card from "../entities/Card";

export default class OP02_076_481 extends Card {
    public static id: string = "OP02_076_481";
    
    public static _name: string = "Shiryu";

    public effect: string = "[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. up to 1 of your opponent's Characters with a cost of 1 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-076_adfb49_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_076_481.id
    }
    
    public getType() {
        return OP02_076_481.type
    }
    
    public getImage() {
        return OP02_076_481.image
    }
    
    public getName() {
        return OP02_076_481._name
    }
}
