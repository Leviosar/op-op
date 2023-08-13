
import Card from "../entities/Card";

export default class OP02_012_445 extends Card {
    public static id: string = "OP02_012_445";
    
    public static _name: string = "Blenheim";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-012_21181d_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_012_445.id
    }
    
    public getType() {
        return OP02_012_445.type
    }
    
    public getImage() {
        return OP02_012_445.image
    }
    
    public getName() {
        return OP02_012_445._name
    }
}
