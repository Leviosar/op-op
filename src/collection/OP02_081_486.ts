
import Card from "../entities/Card";

export default class OP02_081_486 extends Card {
    public static id: string = "OP02_081_486";
    
    public static _name: string = "Domino";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-081_7fcc55_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_081_486.id
    }
    
    public getType() {
        return OP02_081_486.type
    }
    
    public getImage() {
        return OP02_081_486.image
    }
    
    public getName() {
        return OP02_081_486._name
    }
}
