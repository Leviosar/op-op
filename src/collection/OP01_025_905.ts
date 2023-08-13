
import Card from "../entities/Card";

export default class OP01_025_905 extends Card {
    public static id: string = "OP01_025_905";
    
    public static _name: string = "Roronoa Zoro";

    public effect: string = "This character gains <Rush> (This Character can attack the turn it enters play.)";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-025_ee96db_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_025_905.id
    }
    
    public getType() {
        return OP01_025_905.type
    }
    
    public getImage() {
        return OP01_025_905.image
    }
    
    public getName() {
        return OP01_025_905._name
    }
}
