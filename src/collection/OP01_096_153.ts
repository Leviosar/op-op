
import Card from "../entities/Card";

export default class OP01_096_153 extends Card {
    public static id: string = "OP01_096_153";
    
    public static _name: string = "King";

    public effect: string = "[On Play] DON!! -2:  K.O. 1 of your opponent's cost 3 or lower Characters and 1 of your opponent's cost 2 or lower Characters.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-096_b1a98d_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_096_153.id
    }
    
    public getType() {
        return OP01_096_153.type
    }
    
    public getImage() {
        return OP01_096_153.image
    }
    
    public getName() {
        return OP01_096_153._name
    }
}
