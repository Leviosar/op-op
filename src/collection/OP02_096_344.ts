
import Card from "../entities/Card";

export default class OP02_096_344 extends Card {
    public static id: string = "OP02_096_344";
    
    public static _name: string = "Kuzan";

    public effect: string = "[On Play] Draw 1 card.\r\n[When Attacking] Reduce the cost of up to 1 of your opponent's Character by 4 during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-096_a6b8ca_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_096_344.id
    }
    
    public getType() {
        return OP02_096_344.type
    }
    
    public getImage() {
        return OP02_096_344.image
    }
    
    public getName() {
        return OP02_096_344._name
    }
}
