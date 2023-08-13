
import Card from "../entities/Card";

export default class OP01_085_87 extends Card {
    public static id: string = "OP01_085_87";
    
    public static _name: string = "Mr. 3 (Galdino)";

    public effect: string = "[On Play] If your Leader is {Baroque Works} type, choose 1 of your opponent's cost 4 or lower Character, until the end of your opponent's next turn, the chosen Character cannot Attack.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-085_9a4880_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_085_87.id
    }
    
    public getType() {
        return OP01_085_87.type
    }
    
    public getImage() {
        return OP01_085_87.image
    }
    
    public getName() {
        return OP01_085_87._name
    }
}
