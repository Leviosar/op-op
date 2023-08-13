
import Card from "../entities/Card";

export default class OP04_029_813 extends Card {
    public static id: string = "OP04_029_813";
    
    public static _name: string = "Dellinger";

    public effect: string = "[End of Your Turn] Set up to 1 of your DON!! cards as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-029_07fad1_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_029_813.id
    }
    
    public getType() {
        return OP04_029_813.type
    }
    
    public getImage() {
        return OP04_029_813.image
    }
    
    public getName() {
        return OP04_029_813._name
    }
}
