
import Card from "../entities/Card";

export default class OP04_114_874 extends Card {
    public static id: string = "OP04_114_874";
    
    public static _name: string = "Rabiyan";

    public effect: string = "[Trigger] Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-114_eb9869_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_114_874.id
    }
    
    public getType() {
        return OP04_114_874.type
    }
    
    public getImage() {
        return OP04_114_874.image
    }
    
    public getName() {
        return OP04_114_874._name
    }
}
