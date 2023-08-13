
import Card from "../entities/Card";

export default class ST04_001_7 extends Card {
    public static id: string = "ST04_001_7";
    
    public static _name: string = "Kaido";

    public effect: string = "[Activate: Main][Once Per Turn] DON!! -7 (You may return the specified number of DON!! cards from your field to your DON!! deck): Trash the top card of your opponent's life.";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST04-001_2580e6_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return ST04_001_7.id
    }
    
    public getType() {
        return ST04_001_7.type
    }
    
    public getImage() {
        return ST04_001_7.image
    }
    
    public getName() {
        return ST04_001_7._name
    }
}
