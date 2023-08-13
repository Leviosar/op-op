
import Card from "../entities/Card";

export default class OP02_117_508 extends Card {
    public static id: string = "OP02_117_508";
    
    public static _name: string = "Ice Age";

    public effect: string = "[Main] Give up to 1 of your opponent's Characters −5 cost during this turn.\r\n[Trigger] K.O. up to 1 of your opponent's Characters with a cost of 3 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-117_39b3bc_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP02_117_508.id
    }
    
    public getType() {
        return OP02_117_508.type
    }
    
    public getImage() {
        return OP02_117_508.image
    }
    
    public getName() {
        return OP02_117_508._name
    }
}
