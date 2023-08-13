
import Card from "../entities/Card";

export default class OP01_004_235 extends Card {
    public static id: string = "OP01_004_235";
    
    public static _name: string = "Usopp";

    public effect: string = "[DON!!x1] [Your Turn] [Once Per Turn] After you opponent activates an Event, draw 1 card.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-004_6d875c_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_004_235.id
    }
    
    public getType() {
        return OP01_004_235.type
    }
    
    public getImage() {
        return OP01_004_235.image
    }
    
    public getName() {
        return OP01_004_235._name
    }
}
