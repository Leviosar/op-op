
import Card from "../entities/Card";

export default class OP01_048_540 extends Card {
    public static id: string = "OP01_048_540";
    
    public static _name: string = "Nekomamushi";

    public effect: string = "[On Play] Rest one of your opponent's characters that costs 3 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-048_970c1e_jp.png";
    
    public static type = "char";
    
    public getId() {
        return OP01_048_540.id
    }
    
    public getType() {
        return OP01_048_540.type
    }
    
    public getImage() {
        return OP01_048_540.image
    }
    
    public getName() {
        return OP01_048_540._name
    }
}
