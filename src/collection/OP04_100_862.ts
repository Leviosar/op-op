
import Card from "../entities/Card";

export default class OP04_100_862 extends Card {
    public static id: string = "OP04_100_862";
    
    public static _name: string = "Capone \"Gang\" Bege";

    public effect: string = "[Trigger] Up to 1 of your opponent's Leader or Character cards cannot attack during this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-100_03cf4c_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_100_862.id
    }
    
    public getType() {
        return OP04_100_862.type
    }
    
    public getImage() {
        return OP04_100_862.image
    }
    
    public getName() {
        return OP04_100_862._name
    }
}
