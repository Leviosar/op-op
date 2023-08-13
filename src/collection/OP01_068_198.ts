
import Card from "../entities/Card";

export default class OP01_068_198 extends Card {
    public static id: string = "OP01_068_198";
    
    public static _name: string = "Gecko Moria";

    public effect: string = "[Your Turn] This Character gains <Double Attack> if you have 5 or more cards in your hand.\r\n(This card deals 2 damage.)";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-068_b52ccd_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_068_198.id
    }
    
    public getType() {
        return OP01_068_198.type
    }
    
    public getImage() {
        return OP01_068_198.image
    }
    
    public getName() {
        return OP01_068_198._name
    }
}
