
import Card from "../entities/Card";

export default class OP02_023_454 extends Card {
    public static id: string = "OP02_023_454";
    
    public static _name: string = "You May Be a Fool...but I Still Love You";

    public effect: string = "[Main] If you have 3 or less Life cards, you cannot add Life cards to your hand using your own effects during this turn.\r\n[Trigger] Up to 1 of your Leader gains +1000 power during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-023_53fbd0_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP02_023_454.id
    }
    
    public getType() {
        return OP02_023_454.type
    }
    
    public getImage() {
        return OP02_023_454.image
    }
    
    public getName() {
        return OP02_023_454._name
    }
}
