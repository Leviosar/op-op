
import Card from "../entities/Card";

export default class ST02_017_112 extends Card {
    public static id: string = "ST02_017_112";
    
    public static _name: string = "Straw Sword";

    public effect: string = "[Main] Rest 1 of your opponent's Characters.\r\n\r\n[Trigger] Play 1 {Supernovas} type card with a cost of 2 or less from your hand.";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST02-017_8e32c5_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return ST02_017_112.id
    }
    
    public getType() {
        return ST02_017_112.type
    }
    
    public getImage() {
        return ST02_017_112.image
    }
    
    public getName() {
        return ST02_017_112._name
    }
}
