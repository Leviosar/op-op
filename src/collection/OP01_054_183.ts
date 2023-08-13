
import Card from "../entities/Card";

export default class OP01_054_183 extends Card {
    public static id: string = "OP01_054_183";
    
    public static _name: string = "X Drake";

    public effect: string = "[On Play] K.O. 1 of your opponent's rested Characters with a cost of 4 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-054_a85951_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_054_183.id
    }
    
    public getType() {
        return OP01_054_183.type
    }
    
    public getImage() {
        return OP01_054_183.image
    }
    
    public getName() {
        return OP01_054_183._name
    }
}
