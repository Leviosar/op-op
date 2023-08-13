
import Card from "../entities/Card";

export default class ST06_001_265 extends Card {
    public static id: string = "ST06_001_265";
    
    public static _name: string = "Sakazuki";

    public effect: string = "[Activate: Main] [Once per Turn] (3) (You may rest the designated number for DON!! in your Cost Area) You may trash 1 card from your hand: K.O. up to 1 of your opponent's characters that costs 0.";
    
    public source: string = "Navy [ST-06]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST06-001_f1ba4d_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return ST06_001_265.id
    }
    
    public getType() {
        return ST06_001_265.type
    }
    
    public getImage() {
        return ST06_001_265.image
    }
    
    public getName() {
        return ST06_001_265._name
    }
}
