
import Card from "../entities/Card";

export default class OP02_004_359 extends Card {
    public static id: string = "OP02_004_359";
    
    public static _name: string = "Edward Newgate";

    public effect: string = "[On Play] Up to 1 of your Leader gains +2000 until the start of your next turn. Then, you cannot add cards from your Life area to your hand by your effects during this turn.\r\n[When Attacking] [DON!! x2] K.O. up to 1 of your opponent's characters with 3000 or less Power.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-004_bafccf_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_004_359.id
    }
    
    public getType() {
        return OP02_004_359.type
    }
    
    public getImage() {
        return OP02_004_359.image
    }
    
    public getName() {
        return OP02_004_359._name
    }
}
