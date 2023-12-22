
import Card from "../entities/Card";

export default class OP02_077_482 extends Card {
    public static id: string = "OP02_077_482";
    
    public static _name: string = "Shiryu";

    public effect: string = "[On Play] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): K.O. up to 1 of your opponent's Characters with a cost of 1 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-077_bc8b33_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP02_077_482.id
    }
    
    public getType() {
        return OP02_077_482.type
    }
    
    public getImage() {
        return OP02_077_482.image
    }
    
    public getName() {
        return OP02_077_482._name
    }
    
    public getCost(): number {
        return parseInt(OP02_077_482.cost)
    }
}
