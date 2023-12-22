
import Card from "../entities/Card";

export default class ST10_013_899 extends Card {
    public static id: string = "ST10_013_899";
    
    public static _name: string = "Eustass\"Captain\"Kid";

    public effect: string = "[On Play]/[When Attacking] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): Up to 1 of your Leader gains +1000 power until the start of your next turn.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-013_7141a8_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "7";
    
    public getId() {
        return ST10_013_899.id
    }
    
    public getType() {
        return ST10_013_899.type
    }
    
    public getImage() {
        return ST10_013_899.image
    }
    
    public getName() {
        return ST10_013_899._name
    }
    
    public getCost(): number {
        return parseInt(ST10_013_899.cost)
    }
}
