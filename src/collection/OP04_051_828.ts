
import Card from "../entities/Card";

export default class OP04_051_828 extends Card {
    public static id: string = "OP04_051_828";
    
    public static _name: string = "Who's Who";

    public effect: string = "[On Play] Look at 5 cards from the top of your deck; reveal up to 1 {Animal Kingdom Pirates} type card other than [Who's Who] and add it to your hand. Then, place the rest at the bottom of your deck in any order.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-051_81d10c_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return OP04_051_828.id
    }
    
    public getType() {
        return OP04_051_828.type
    }
    
    public getImage() {
        return OP04_051_828.image
    }
    
    public getName() {
        return OP04_051_828._name
    }
    
    public getCost(): number {
        return parseInt(OP04_051_828.cost)
    }
}
