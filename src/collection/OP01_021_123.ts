
import Card from "../entities/Card";

export default class OP01_021_123 extends Card {
    public static id: string = "OP01_021_123";
    
    public static _name: string = "Franky";

    public effect: string = "[DON!!x1] This character can attack your opponent's active characters.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-021_ba1620_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_021_123.id
    }
    
    public getType() {
        return OP01_021_123.type
    }
    
    public getImage() {
        return OP01_021_123.image
    }
    
    public getName() {
        return OP01_021_123._name
    }
}
