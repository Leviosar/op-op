
import Card from "../entities/Card";

export default class OP04_028_762 extends Card {
    public static id: string = "OP04_028_762";
    
    public static _name: string = "Diamante";

    public effect: string = "<Blocker>\r\n[DONx1] [End of Your Turn] If you have 2 or more active DON!!, set this character as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-028_2cbb2a_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_028_762.id
    }
    
    public getType() {
        return OP04_028_762.type
    }
    
    public getImage() {
        return OP04_028_762.image
    }
    
    public getName() {
        return OP04_028_762._name
    }
}
