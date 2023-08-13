
import Card from "../entities/Card";

export default class OP02_088_490 extends Card {
    public static id: string = "OP02_088_490";
    
    public static _name: string = "Minotaur";

    public effect: string = "<Double Attack> (This card deals 2 damage.)\r\n[On K.O.] If your Leader has {{Impel Down}} as a type, add 1 DON!! card from your DON!! deck and rest it.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-088_674596_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_088_490.id
    }
    
    public getType() {
        return OP02_088_490.type
    }
    
    public getImage() {
        return OP02_088_490.image
    }
    
    public getName() {
        return OP02_088_490._name
    }
}
