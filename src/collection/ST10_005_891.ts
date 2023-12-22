
import Card from "../entities/Card";

export default class ST10_005_891 extends Card {
    public static id: string = "ST10_005_891";
    
    public static _name: string = "Jinbe";

    public effect: string = "[DON!! x1] [When Attacking] Give up to 1 of your opponent's Characters −2000 power during this turn.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-005_a15297_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return ST10_005_891.id
    }
    
    public getType() {
        return ST10_005_891.type
    }
    
    public getImage() {
        return ST10_005_891.image
    }
    
    public getName() {
        return ST10_005_891._name
    }
    
    public getCost(): number {
        return parseInt(ST10_005_891.cost)
    }
}
