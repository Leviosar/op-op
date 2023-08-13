
import Card from "../entities/Card";

export default class OP01_118_158 extends Card {
    public static id: string = "OP01_118_158";
    
    public static _name: string = "Ulti-Mortar";

    public effect: string = "[Counter] DON!! -2: Your Leader or 1 of your Character gains +2000 Power for this battle. Then draw 1 card. \r\n[Trigger] Add 1 DON!! card from your DON!! deck and set it as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-118_31a57c_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP01_118_158.id
    }
    
    public getType() {
        return OP01_118_158.type
    }
    
    public getImage() {
        return OP01_118_158.image
    }
    
    public getName() {
        return OP01_118_158._name
    }
}
