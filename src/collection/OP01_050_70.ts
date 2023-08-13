
import Card from "../entities/Card";

export default class OP01_050_70 extends Card {
    public static id: string = "OP01_050_70";
    
    public static _name: string = "Penguin";

    public effect: string = "<Blocker>\r\n[On Play] If you don't control [Shachi], play 1 [Shachi] from your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-050_1b0717_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_050_70.id
    }
    
    public getType() {
        return OP01_050_70.type
    }
    
    public getImage() {
        return OP01_050_70.image
    }
    
    public getName() {
        return OP01_050_70._name
    }
}
