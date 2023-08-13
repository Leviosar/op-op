
import Card from "../entities/Card";

export default class OP01_056_185 extends Card {
    public static id: string = "OP01_056_185";
    
    public static _name: string = "Demon Face";

    public effect: string = "[Main] K.O. 2 of your opponent's rested Characters with a cost of 5 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-056_7b72b0_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP01_056_185.id
    }
    
    public getType() {
        return OP01_056_185.type
    }
    
    public getImage() {
        return OP01_056_185.image
    }
    
    public getName() {
        return OP01_056_185._name
    }
}
