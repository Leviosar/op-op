
import Card from "../entities/Card";

export default class OP01_076_61 extends Card {
    public static id: string = "OP01_076_61";
    
    public static _name: string = "Kawamatsu";

    public effect: string = "[Trigger]: Play this card. ";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-076_2d58a2_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_076_61.id
    }
    
    public getType() {
        return OP01_076_61.type
    }
    
    public getImage() {
        return OP01_076_61.image
    }
    
    public getName() {
        return OP01_076_61._name
    }
}
