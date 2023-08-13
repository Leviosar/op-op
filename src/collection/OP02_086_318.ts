
import Card from "../entities/Card";

export default class OP02_086_318 extends Card {
    public static id: string = "OP02_086_318";
    
    public static _name: string = "Minokoala";

    public effect: string = "<Blocker>\r\n[On K.O.] If your Leader has {{Impel Down}} as a type, add 1 DON!! card from your DON!! deck and rest it.\r\n";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-086_a5f09f_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_086_318.id
    }
    
    public getType() {
        return OP02_086_318.type
    }
    
    public getImage() {
        return OP02_086_318.image
    }
    
    public getName() {
        return OP02_086_318._name
    }
}
