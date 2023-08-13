
import Card from "../entities/Card";

export default class ST04_011_285 extends Card {
    public static id: string = "ST04_011_285";
    
    public static _name: string = "Black Maria";

    public effect: string = "<Blocker>";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST04-011_b4596d_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST04_011_285.id
    }
    
    public getType() {
        return ST04_011_285.type
    }
    
    public getImage() {
        return ST04_011_285.image
    }
    
    public getName() {
        return ST04_011_285._name
    }
}
