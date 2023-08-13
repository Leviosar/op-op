
import Card from "../entities/Card";

export default class OP04_044_823 extends Card {
    public static id: string = "OP04_044_823";
    
    public static _name: string = "Kaido";

    public effect: string = "[On Play] Return up to 1 Character with a cost of 8 or less and up to 1 Character with a cost of 3 or less to the owner's hand.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-044_5ff3ac_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_044_823.id
    }
    
    public getType() {
        return OP04_044_823.type
    }
    
    public getImage() {
        return OP04_044_823.image
    }
    
    public getName() {
        return OP04_044_823._name
    }
}
