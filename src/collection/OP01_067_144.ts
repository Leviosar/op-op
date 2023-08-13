
import Card from "../entities/Card";

export default class OP01_067_144 extends Card {
    public static id: string = "OP01_067_144";
    
    public static _name: string = "Crocodile";

    public effect: string = "[Banish] (When this card deals damage, the life card is trashed without activating [Trigger])\r\n[DON!!x1] Blue Event cards in your hand have Cost-1";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-067_732d0e_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_067_144.id
    }
    
    public getType() {
        return OP01_067_144.type
    }
    
    public getImage() {
        return OP01_067_144.image
    }
    
    public getName() {
        return OP01_067_144._name
    }
}
