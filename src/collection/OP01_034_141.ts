
import Card from "../entities/Card";

export default class OP01_034_141 extends Card {
    public static id: string = "OP01_034_141";
    
    public static _name: string = "Inuarashi";

    public effect: string = "[DON!! x2][When attacking] Set 1 of your DON!! as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-034_44106e_jp.png";
    
    public static type = "char";
    
    public getId() {
        return OP01_034_141.id
    }
    
    public getType() {
        return OP01_034_141.type
    }
    
    public getImage() {
        return OP01_034_141.image
    }
    
    public getName() {
        return OP01_034_141._name
    }
}
