
import Card from "../entities/Card";

export default class ST10_007_893 extends Card {
    public static id: string = "ST10_007_893";
    
    public static _name: string = "Killer";

    public effect: string = "[Your Turn] [Once Per Turn] When a DON!! card on your field is returned to your DON!! deck, K.O. up to 1 of your opponent's rested Characters with a cost of 3 or less.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-007_2b498c_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return ST10_007_893.id
    }
    
    public getType() {
        return ST10_007_893.type
    }
    
    public getImage() {
        return ST10_007_893.image
    }
    
    public getName() {
        return ST10_007_893._name
    }
    
    public getCost(): number {
        return parseInt(ST10_007_893.cost)
    }
}
