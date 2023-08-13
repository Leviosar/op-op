
import Card from "../entities/Card";

export default class OP02_049_300 extends Card {
    public static id: string = "OP02_049_300";
    
    public static _name: string = "Emporio Ivankov";

    public effect: string = "[End of your turn] If you have 0 cards in your hand, draw 2 cards.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-049_fe802a_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return OP02_049_300.id
    }
    
    public getType() {
        return OP02_049_300.type
    }
    
    public getImage() {
        return OP02_049_300.image
    }
    
    public getName() {
        return OP02_049_300._name
    }
}
