
import Card from "../entities/Card";

export default class ST10_008_894 extends Card {
    public static id: string = "ST10_008_894";
    
    public static _name: string = "Shachi & Penguin";

    public effect: string = "[On Play] If you have 3 or less DON!! cards on your field, add up to 2 DON!! cards from your DON!! deck and rest them.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST10-008_adcea7_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST10_008_894.id
    }
    
    public getType() {
        return ST10_008_894.type
    }
    
    public getImage() {
        return ST10_008_894.image
    }
    
    public getName() {
        return ST10_008_894._name
    }
}
