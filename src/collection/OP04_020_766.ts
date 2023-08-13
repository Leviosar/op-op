
import Card from "../entities/Card";

export default class OP04_020_766 extends Card {
    public static id: string = "OP04_020_766";
    
    public static _name: string = "Issho";

    public effect: string = "[DON!! x1] [Your Turn] Give all of your opponent's Characters -1 cost.\r\n[End of Your Turn] (1): Set up to 1 of your Characters with a cost of 5 or less as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-020_cae8a1_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return OP04_020_766.id
    }
    
    public getType() {
        return OP04_020_766.type
    }
    
    public getImage() {
        return OP04_020_766.image
    }
    
    public getName() {
        return OP04_020_766._name
    }
}
