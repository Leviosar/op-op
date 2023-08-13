
import Card from "../entities/Card";

export default class OP01_046_178 extends Card {
    public static id: string = "OP01_046_178";
    
    public static _name: string = "Denjiro";

    public effect: string = "[DON!! x1] [When Attacking] If your Leader is [Kozuki Oden], set up to 2 of your DON!! cards as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-046_6ed435_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_046_178.id
    }
    
    public getType() {
        return OP01_046_178.type
    }
    
    public getImage() {
        return OP01_046_178.image
    }
    
    public getName() {
        return OP01_046_178._name
    }
}
