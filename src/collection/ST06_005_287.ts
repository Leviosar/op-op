
import Card from "../entities/Card";

export default class ST06_005_287 extends Card {
    public static id: string = "ST06_005_287";
    
    public static _name: string = "Sengoku";

    public effect: string = "[When Attacking] For this turn, -4 cost for one of your opponent's characters.";
    
    public source: string = "Navy [ST-06]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST06-005_65f240_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST06_005_287.id
    }
    
    public getType() {
        return ST06_005_287.type
    }
    
    public getImage() {
        return ST06_005_287.image
    }
    
    public getName() {
        return ST06_005_287._name
    }
}
