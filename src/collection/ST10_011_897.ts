
import Card from "../entities/Card";

export default class ST10_011_897 extends Card {
    public static id: string = "ST10_011_897";
    
    public static _name: string = "Heat";

    public effect: string = "[Your Turn] [Once Per Turn] When a DON!! card on your field is returned to your DON!! deck, this Character gains +2000 power until the start of your next turn.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-011_7b5d2b_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return ST10_011_897.id
    }
    
    public getType() {
        return ST10_011_897.type
    }
    
    public getImage() {
        return ST10_011_897.image
    }
    
    public getName() {
        return ST10_011_897._name
    }
    
    public getCost(): number {
        return parseInt(ST10_011_897.cost)
    }
}
