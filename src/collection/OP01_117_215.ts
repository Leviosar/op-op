
import Card from "../entities/Card";

export default class OP01_117_215 extends Card {
    public static id: string = "OP01_117_215";
    
    public static _name: string = "Sheep's Horn";

    public effect: string = "[Main] DON!!-1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Rest 1 of your opponent's Characters with a cost of 6 or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-117_80346e_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP01_117_215.id
    }
    
    public getType() {
        return OP01_117_215.type
    }
    
    public getImage() {
        return OP01_117_215.image
    }
    
    public getName() {
        return OP01_117_215._name
    }
}
