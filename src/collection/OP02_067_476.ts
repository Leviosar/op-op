
import Card from "../entities/Card";

export default class OP02_067_476 extends Card {
    public static id: string = "OP02_067_476";
    
    public static _name: string = "Arabesque Brick Fist";

    public effect: string = "[Main] Return up to 1 Character with a cost of 4 or less to the owner's hand.\r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-067_4a1a20_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP02_067_476.id
    }
    
    public getType() {
        return OP02_067_476.type
    }
    
    public getImage() {
        return OP02_067_476.image
    }
    
    public getName() {
        return OP02_067_476._name
    }
}
