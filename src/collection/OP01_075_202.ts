
import Card from "../entities/Card";

export default class OP01_075_202 extends Card {
    public static id: string = "OP01_075_202";
    
    public static _name: string = "Pacifista";

    public effect: string = "You can have as many of this card in your deck as the rules permit.\r\n<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-075_00694e_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_075_202.id
    }
    
    public getType() {
        return OP01_075_202.type
    }
    
    public getImage() {
        return OP01_075_202.image
    }
    
    public getName() {
        return OP01_075_202._name
    }
}
