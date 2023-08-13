
import Card from "../entities/Card";

export default class OP01_049_179 extends Card {
    public static id: string = "OP01_049_179";
    
    public static _name: string = "Bepo";

    public effect: string = "[DON!! x1] [When Attacking] Play 1 {Heart Pirates} type card other than Bepo with a cost of 4 or less from your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-049_72068b_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_049_179.id
    }
    
    public getType() {
        return OP01_049_179.type
    }
    
    public getImage() {
        return OP01_049_179.image
    }
    
    public getName() {
        return OP01_049_179._name
    }
}
