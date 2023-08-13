
import Card from "../entities/Card";

export default class OP02_021_452 extends Card {
    public static id: string = "OP02_021_452";
    
    public static _name: string = "Seaquake";

    public effect: string = "[Main] If your Leader's type includes \"Whitebeard Pirates\", K.O. up to 1 of your opponent's Characters with 3000 power or less.\r\n[Trigger] Give up to 1 of your opponent's Leader or Character cards −3000 power during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-021_0f81a1_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP02_021_452.id
    }
    
    public getType() {
        return OP02_021_452.type
    }
    
    public getImage() {
        return OP02_021_452.image
    }
    
    public getName() {
        return OP02_021_452._name
    }
}
