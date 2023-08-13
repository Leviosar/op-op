
import Card from "../entities/Card";

export default class ST06_010_302 extends Card {
    public static id: string = "ST06_010_302";
    
    public static _name: string = "Helmeppo";

    public effect: string = "[On Play] -3 cost for up to 1 of your opponent's Characters during this turn.";
    
    public source: string = "Navy [ST-06]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST06-010_165ce6_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST06_010_302.id
    }
    
    public getType() {
        return ST06_010_302.type
    }
    
    public getImage() {
        return ST06_010_302.image
    }
    
    public getName() {
        return ST06_010_302._name
    }
}
