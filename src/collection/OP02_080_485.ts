
import Card from "../entities/Card";

export default class OP02_080_485 extends Card {
    public static id: string = "OP02_080_485";
    
    public static _name: string = "Douglas Bullet";

    public effect: string = "[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Rest up to 1 of your opponent's Characters with a cost of 4 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-080_6c87e5_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_080_485.id
    }
    
    public getType() {
        return OP02_080_485.type
    }
    
    public getImage() {
        return OP02_080_485.image
    }
    
    public getName() {
        return OP02_080_485._name
    }
}
