
import Card from "../entities/Card";

export default class ST02_010_56 extends Card {
    public static id: string = "ST02_010_56";
    
    public static _name: string = "Basil Hawkins";

    public effect: string = "[DON!!x1] [Once Per turn] [Your Turn] If this Character battles your opponent's Character, set this card as active.";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST02-010_1a03c3_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST02_010_56.id
    }
    
    public getType() {
        return ST02_010_56.type
    }
    
    public getImage() {
        return ST02_010_56.image
    }
    
    public getName() {
        return ST02_010_56._name
    }
}
