
import Card from "../entities/Card";

export default class OP04_018_807 extends Card {
    public static id: string = "OP04_018_807";
    
    public static _name: string = "Enchanting Vertigo Dance";

    public effect: string = "[Main] If your Leader has the {Alabasta} type, give up to 2 of your opponent's Characters −2000 power during this turn.\r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-018_b68188_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP04_018_807.id
    }
    
    public getType() {
        return OP04_018_807.type
    }
    
    public getImage() {
        return OP04_018_807.image
    }
    
    public getName() {
        return OP04_018_807._name
    }
}
