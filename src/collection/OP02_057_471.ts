
import Card from "../entities/Card";

export default class OP02_057_471 extends Card {
    public static id: string = "OP02_057_471";
    
    public static _name: string = "Bartholomew Kuma";

    public effect: string = "[On Play] Look at 2 cards from the top of your deck; reveal up to 1 {The Seven Warlords of the Sea} type card and add it to your hand. Then, place the rest at the top or bottom of the deck in any order.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-057_989782_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP02_057_471.id
    }
    
    public getType() {
        return OP02_057_471.type
    }
    
    public getImage() {
        return OP02_057_471.image
    }
    
    public getName() {
        return OP02_057_471._name
    }
    
    public getCost(): number {
        return parseInt(OP02_057_471.cost)
    }
}