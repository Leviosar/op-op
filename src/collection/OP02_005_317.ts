
import Card from "../entities/Card";

export default class OP02_005_317 extends Card {
    public static id: string = "OP02_005_317";
    
    public static _name: string = "Curly Dadan";

    public effect: string = "[On Play] Look at 5 cards from the top of your deck; reveal up to 1 Red Character that costs 1 or less and add it to your hand. Then, place the rest at the bottom of your deck in any order.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-005_1c873e_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP02_005_317.id
    }
    
    public getType() {
        return OP02_005_317.type
    }
    
    public getImage() {
        return OP02_005_317.image
    }
    
    public getName() {
        return OP02_005_317._name
    }
    
    public getCost(): number {
        return parseInt(OP02_005_317.cost)
    }
}
