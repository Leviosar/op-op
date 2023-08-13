
import Card from "../entities/Card";

export default class OP01_043_177 extends Card {
    public static id: string = "OP01_043_177";
    
    public static _name: string = "Komurasaki";

    public effect: string = "[On Play] (3) (You may rest the specified number of DON!! cards in your cost area.): If your Leader is [Kozuki Oden], set 1 of your {Wano Country} type Character cards with a cost of 3 or less as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-043_d842d7_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_043_177.id
    }
    
    public getType() {
        return OP01_043_177.type
    }
    
    public getImage() {
        return OP01_043_177.image
    }
    
    public getName() {
        return OP01_043_177._name
    }
}
