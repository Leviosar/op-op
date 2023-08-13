
import Card from "../entities/Card";

export default class OP04_068_776 extends Card {
    public static id: string = "OP04_068_776";
    
    public static _name: string = "Yokozuna";

    public effect: string = "<Blocker>\r\n[On Your Opponent's Attack] DON!! -1: Return up to 1 of your opponent's Characters with a cost of 2 or less to its owner's hand.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-068_8c1dec_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_068_776.id
    }
    
    public getType() {
        return OP04_068_776.type
    }
    
    public getImage() {
        return OP04_068_776.image
    }
    
    public getName() {
        return OP04_068_776._name
    }
}
