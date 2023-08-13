
import Card from "../entities/Card";

export default class OP01_100_208 extends Card {
    public static id: string = "OP01_100_208";
    
    public static _name: string = "Kurozumi Higurashi";

    public effect: string = "<Blocker>(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-100_6e96ea_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_100_208.id
    }
    
    public getType() {
        return OP01_100_208.type
    }
    
    public getImage() {
        return OP01_100_208.image
    }
    
    public getName() {
        return OP01_100_208._name
    }
}
