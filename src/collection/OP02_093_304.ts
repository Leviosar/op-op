
import Card from "../entities/Card";

export default class OP02_093_304 extends Card {
    public static id: string = "OP02_093_304";
    
    public static _name: string = "Smoker";

    public effect: string = "[DON!!x1] [Activate: Main] [Once Per Turn] Give up to 1 of your opponent's Characters -1 to their cost during this turn. Then, if there is a Character with a cost of 0, this Leader gains +1000 Power during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-093_a8375f_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return OP02_093_304.id
    }
    
    public getType() {
        return OP02_093_304.type
    }
    
    public getImage() {
        return OP02_093_304.image
    }
    
    public getName() {
        return OP02_093_304._name
    }
}
