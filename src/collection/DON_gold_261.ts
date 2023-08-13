
import Card from "../entities/Card";

export default class DON_gold_261 extends Card {
    public static id: string = "DON_gold_261";
    
    public static _name: string = "Your Turn +1000";

    public effect: string = "Your Turn +1000";
    
    public source: string = "Misc [MISC]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/DON-gold_b97ce0_jp.jpg";
    
    public static type = "don";
    
    public getId() {
        return DON_gold_261.id
    }
    
    public getType() {
        return DON_gold_261.type
    }
    
    public getImage() {
        return DON_gold_261.image
    }
    
    public getName() {
        return DON_gold_261._name
    }
}
