
import Card from "../entities/Card";

export default class DON_don_15 extends Card {
    public static id: string = "DON_don_15";
    
    public static _name: string = "Your Turn +1000";

    public effect: string = "Your Turn +1000";
    
    public source: string = "Misc [MISC]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/DON-don_630ca7_jp.jpg";
    
    public static type = "don";
    
    public getId() {
        return DON_don_15.id
    }
    
    public getType() {
        return DON_don_15.type
    }
    
    public getImage() {
        return DON_don_15.image
    }
    
    public getName() {
        return DON_don_15._name
    }
}
