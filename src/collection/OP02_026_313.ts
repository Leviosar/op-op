
import Card from "../entities/Card";

export default class OP02_026_313 extends Card {
    public static id: string = "OP02_026_313";
    
    public static _name: string = "Sanji";

    public effect: string = "[Once Per Turn] When you play a Character without an effect from your hand, if you have 3 or less Characters in play, set up to 2 of your Don!! to active.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-0026_225543_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return OP02_026_313.id
    }
    
    public getType() {
        return OP02_026_313.type
    }
    
    public getImage() {
        return OP02_026_313.image
    }
    
    public getName() {
        return OP02_026_313._name
    }
}
