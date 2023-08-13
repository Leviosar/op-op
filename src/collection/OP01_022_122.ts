
import Card from "../entities/Card";

export default class OP01_022_122 extends Card {
    public static id: string = "OP01_022_122";
    
    public static _name: string = "Brook";

    public effect: string = "[DON!!x1] [When Attacking] Up to two of your opponent's characters: -2000 power for this turn.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-022_3a1881_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_022_122.id
    }
    
    public getType() {
        return OP01_022_122.type
    }
    
    public getImage() {
        return OP01_022_122.image
    }
    
    public getName() {
        return OP01_022_122._name
    }
}
