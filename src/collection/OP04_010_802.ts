
import Card from "../entities/Card";

export default class OP04_010_802 extends Card {
    public static id: string = "OP04_010_802";
    
    public static _name: string = "Tony Tony Chopper";

    public effect: string = "[On Play] Play up to 1 {Animal} type Character card with 3000 power or less from your hand.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-010_866485_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_010_802.id
    }
    
    public getType() {
        return OP04_010_802.type
    }
    
    public getImage() {
        return OP04_010_802.image
    }
    
    public getName() {
        return OP04_010_802._name
    }
}
