
import Card from "../entities/Card";

export default class OP02_099_338 extends Card {
    public static id: string = "OP02_099_338";
    
    public static _name: string = "Sakazuki";

    public effect: string = "[On Play] You may trash 1 card from your hand: K.O. up to 1 of your opponent's Characters with a cost 5 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-099_93ec7a_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_099_338.id
    }
    
    public getType() {
        return OP02_099_338.type
    }
    
    public getImage() {
        return OP02_099_338.image
    }
    
    public getName() {
        return OP02_099_338._name
    }
}
