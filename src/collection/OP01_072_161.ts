
import Card from "../entities/Card";

export default class OP01_072_161 extends Card {
    public static id: string = "OP01_072_161";
    
    public static _name: string = "Smiley";

    public effect: string = "[DON!!x1] [Your Turn] For each card in your hand, +1000 power for this character.\r\n";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-072_6b7035_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_072_161.id
    }
    
    public getType() {
        return OP01_072_161.type
    }
    
    public getImage() {
        return OP01_072_161.image
    }
    
    public getName() {
        return OP01_072_161._name
    }
}
