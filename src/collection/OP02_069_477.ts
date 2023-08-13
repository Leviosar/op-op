
import Card from "../entities/Card";

export default class OP02_069_477 extends Card {
    public static id: string = "OP02_069_477";
    
    public static _name: string = "DEATH WINK";

    public effect: string = "[Counter] Up to 1 of your Leader or Character cards gains +6000 power during this battle. Then, draw cards so that you have 2 cards in your hand.\r\n[Trigger] Return up to 1 Character with a cost of 7 or less to the owner's hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-069_2f2c94_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP02_069_477.id
    }
    
    public getType() {
        return OP02_069_477.type
    }
    
    public getImage() {
        return OP02_069_477.image
    }
    
    public getName() {
        return OP02_069_477._name
    }
}
