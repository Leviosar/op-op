
import Card from "../entities/Card";

export default class OP01_113_79 extends Card {
    public static id: string = "OP01_113_79";
    
    public static _name: string = "Holdem";

    public effect: string = "[On K.O.] Add 1 DON!! from your DON!! deck to your cost area rested.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-113_4bbf2b_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_113_79.id
    }
    
    public getType() {
        return OP01_113_79.type
    }
    
    public getImage() {
        return OP01_113_79.image
    }
    
    public getName() {
        return OP01_113_79._name
    }
}
