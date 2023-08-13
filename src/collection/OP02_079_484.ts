
import Card from "../entities/Card";

export default class OP02_079_484 extends Card {
    public static id: string = "OP02_079_484";
    
    public static _name: string = "Douglas Bullet";

    public effect: string = "[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Rest up to 1 of your opponent's Characters with a cost of 4 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-079_09d86b_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_079_484.id
    }
    
    public getType() {
        return OP02_079_484.type
    }
    
    public getImage() {
        return OP02_079_484.image
    }
    
    public getName() {
        return OP02_079_484._name
    }
}
