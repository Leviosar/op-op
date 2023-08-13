
import Card from "../entities/Card";

export default class OP04_092_856 extends Card {
    public static id: string = "OP04_092_856";
    
    public static _name: string = "Rebecca";

    public effect: string = "[On Play] Look at 3 cards from the top of your deck; reveal up to 1 {Dressrosa} type card other than [Rebecca] and add it to your hand. Then, trash the rest.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-092_648627_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_092_856.id
    }
    
    public getType() {
        return OP04_092_856.type
    }
    
    public getImage() {
        return OP04_092_856.image
    }
    
    public getName() {
        return OP04_092_856._name
    }
}
