
import Card from "../entities/Card";

export default class OP01_094_51 extends Card {
    public static id: string = "OP01_094_51";
    
    public static _name: string = "Kaido";

    public effect: string = "[On Play] Don!! -6: If your Leader has the [Animal Kingdom Pirates] trait, K.O. all Characters other than this one.\r\n \r\n";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-094_e24c31_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_094_51.id
    }
    
    public getType() {
        return OP01_094_51.type
    }
    
    public getImage() {
        return OP01_094_51.image
    }
    
    public getName() {
        return OP01_094_51._name
    }
}
