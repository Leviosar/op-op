
import Card from "../entities/Card";

export default class ST10_009_895 extends Card {
    public static id: string = "ST10_009_895";
    
    public static _name: string = "Jean Bart";

    public effect: string = "[On Play] ➀ (You may rest the specified number of DON!! cards in your cost area.): Add up to 1 DON!! card from your DON!! deck and set it as active.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-009_783684_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return ST10_009_895.id
    }
    
    public getType() {
        return ST10_009_895.type
    }
    
    public getImage() {
        return ST10_009_895.image
    }
    
    public getName() {
        return ST10_009_895._name
    }
    
    public getCost(): number {
        return parseInt(ST10_009_895.cost)
    }
}