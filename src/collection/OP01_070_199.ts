
import Card from "../entities/Card";

export default class OP01_070_199 extends Card {
    public static id: string = "OP01_070_199";
    
    public static _name: string = "Dracule Mihawk";

    public effect: string = "[On Play] Place up to 1 Character with a cost of 7 or less at the bottom of the owner's deck.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-070_efbd13_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_070_199.id
    }
    
    public getType() {
        return OP01_070_199.type
    }
    
    public getImage() {
        return OP01_070_199.image
    }
    
    public getName() {
        return OP01_070_199._name
    }
}
