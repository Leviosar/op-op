
import Card from "../entities/Card";

export default class OP01_017_124 extends Card {
    public static id: string = "OP01_017_124";
    
    public static _name: string = "Nico Robin";

    public effect: string = "[DON!!x1] [When Attacking] K.O. one of your opponent's Characters with 3000 power or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-017_3b2c2c_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_017_124.id
    }
    
    public getType() {
        return OP01_017_124.type
    }
    
    public getImage() {
        return OP01_017_124.image
    }
    
    public getName() {
        return OP01_017_124._name
    }
}
