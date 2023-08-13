
import Card from "../entities/Card";

export default class OP01_106_114 extends Card {
    public static id: string = "OP01_106_114";
    
    public static _name: string = "Basil Hawkins";

    public effect: string = "[On Play] Add 1 DON!! card from your DON!! deck to your Cost Area rested.\r\n[Trigger] Play this card.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-106_357461_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_106_114.id
    }
    
    public getType() {
        return OP01_106_114.type
    }
    
    public getImage() {
        return OP01_106_114.image
    }
    
    public getName() {
        return OP01_106_114._name
    }
}
