
import Card from "../entities/Card";

export default class OP01_022_241 extends Card {
    public static id: string = "OP01_022_241";
    
    public static _name: string = "Brook";

    public effect: string = "[DON!!x1] [When Attacking] Up to two of your opponent's characters: -2000 power for this turn.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-022_7120cd_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_022_241.id
    }
    
    public getType() {
        return OP01_022_241.type
    }
    
    public getImage() {
        return OP01_022_241.image
    }
    
    public getName() {
        return OP01_022_241._name
    }
}
