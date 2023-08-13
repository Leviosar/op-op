
import Card from "../entities/Card";

export default class OP01_048_143 extends Card {
    public static id: string = "OP01_048_143";
    
    public static _name: string = "Nekomamushi";

    public effect: string = "[On Play] Rest one of your opponent's characters that costs 3 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-048_b74b29_jp.png";
    
    public static type = "char";
    
    public getId() {
        return OP01_048_143.id
    }
    
    public getType() {
        return OP01_048_143.type
    }
    
    public getImage() {
        return OP01_048_143.image
    }
    
    public getName() {
        return OP01_048_143._name
    }
}
