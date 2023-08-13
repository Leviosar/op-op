
import Card from "../entities/Card";

export default class OP01_013_128 extends Card {
    public static id: string = "OP01_013_128";
    
    public static _name: string = "Sanji";

    public effect: string = "[Activate: Main] [Once Per Turn] (Take 1 Life card and put it in your hand): This turn: +2000 power for this Character. Then, give this character up to 2 of your rested DON!!";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-013_8d7770_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_013_128.id
    }
    
    public getType() {
        return OP01_013_128.type
    }
    
    public getImage() {
        return OP01_013_128.image
    }
    
    public getName() {
        return OP01_013_128._name
    }
}
