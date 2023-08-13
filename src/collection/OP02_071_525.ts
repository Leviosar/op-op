
import Card from "../entities/Card";

export default class OP02_071_525 extends Card {
    public static id: string = "OP02_071_525";
    
    public static _name: string = "Magellan";

    public effect: string = "[Your Turn] [Once per Turn] When a DON!! card is returned from the field to the DON!! deck, this Leader gains +1000 Power during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-071_cfe24b_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return OP02_071_525.id
    }
    
    public getType() {
        return OP02_071_525.type
    }
    
    public getImage() {
        return OP02_071_525.image
    }
    
    public getName() {
        return OP02_071_525._name
    }
}
