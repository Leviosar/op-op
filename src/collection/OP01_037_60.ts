
import Card from "../entities/Card";

export default class OP01_037_60 extends Card {
    public static id: string = "OP01_037_60";
    
    public static _name: string = "Kawamatsu";

    public effect: string = "[Trigger]: Play this card. ";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-037_421381_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_037_60.id
    }
    
    public getType() {
        return OP01_037_60.type
    }
    
    public getImage() {
        return OP01_037_60.image
    }
    
    public getName() {
        return OP01_037_60._name
    }
}
