
import Card from "../entities/Card";

export default class ST04_002_13 extends Card {
    public static id: string = "ST04_002_13";
    
    public static _name: string = "Ulti";

    public effect: string = "[On Play] DON!! -1: (You may return the specified number of DON!! cards from your field to your DON!! deck.) Play up to 1 [Page One] character card with a cost of 4 or less from your hand without paying its cost. ";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST04-002_6def11_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST04_002_13.id
    }
    
    public getType() {
        return ST04_002_13.type
    }
    
    public getImage() {
        return ST04_002_13.image
    }
    
    public getName() {
        return ST04_002_13._name
    }
}
