
import Card from "../entities/Card";

export default class ST02_009_43 extends Card {
    public static id: string = "ST02_009_43";
    
    public static _name: string = "Trafalgar Law";

    public effect: string = "[On Play] Set one of your rested Characters with the Supernovas or Heart Pirates trait with a cost of 5 or less to active";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST02-009_977b7d_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST02_009_43.id
    }
    
    public getType() {
        return ST02_009_43.type
    }
    
    public getImage() {
        return ST02_009_43.image
    }
    
    public getName() {
        return ST02_009_43._name
    }
}
