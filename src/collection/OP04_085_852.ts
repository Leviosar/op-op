
import Card from "../entities/Card";

export default class OP04_085_852 extends Card {
    public static id: string = "OP04_085_852";
    
    public static _name: string = "Suleiman";

    public effect: string = "[On Play]/[When Attacking] If your Leader has the {Dressrosa} type, give up to 1 of your opponent's Characters −2 cost during this turn. Then, trash 1 card from the top of your deck.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-085_13e8af_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_085_852.id
    }
    
    public getType() {
        return OP04_085_852.type
    }
    
    public getImage() {
        return OP04_085_852.image
    }
    
    public getName() {
        return OP04_085_852._name
    }
}
