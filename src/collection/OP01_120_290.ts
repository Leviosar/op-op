
import Card from "../entities/Card";

export default class OP01_120_290 extends Card {
    public static id: string = "OP01_120_290";
    
    public static _name: string = "Shanks";

    public effect: string = "<Rush> (This card can attack on the turn in which it is played.)\r\n[When Attacking] During this battle, your opponent can not activate <Blocker> of Characters with 2000 power or less.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-120_60780c_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_120_290.id
    }
    
    public getType() {
        return OP01_120_290.type
    }
    
    public getImage() {
        return OP01_120_290.image
    }
    
    public getName() {
        return OP01_120_290._name
    }
}
