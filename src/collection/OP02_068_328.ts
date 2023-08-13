
import Card from "../entities/Card";

export default class OP02_068_328 extends Card {
    public static id: string = "OP02_068_328";
    
    public static _name: string = "Gum Gum Rain";

    public effect: string = "[Counter] You may trash 1 card from your hand: Up to 1 of your Characters or Leader, +3000 power for this battle.\r\n[Trigger] Return up to 1 Character that costs 2 or less to their owner's hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-068_9c6769_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP02_068_328.id
    }
    
    public getType() {
        return OP02_068_328.type
    }
    
    public getImage() {
        return OP02_068_328.image
    }
    
    public getName() {
        return OP02_068_328._name
    }
}
