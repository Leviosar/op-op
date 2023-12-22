
import Card from "../entities/Card";

export default class ST10_003_889 extends Card {
    public static id: string = "ST10_003_889";
    
    public static _name: string = "Eustass\"Captain\"Kid";

    public effect: string = "[Your Turn] If you have 4 or more Life cards, give this Leader −1000 power.\r\n[When Attacking] DON!! −1 (You may return the specified number of DON!! cards from your field to your DON!! deck.): This Leader gains +2000 power during this turn.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-003_62f558_jp.jpg";
    
    public static type: string = "leader";
    
    public static cost: string = "None";
    
    public getId() {
        return ST10_003_889.id
    }
    
    public getType() {
        return ST10_003_889.type
    }
    
    public getImage() {
        return ST10_003_889.image
    }
    
    public getName() {
        return ST10_003_889._name
    }
    
    public getCost(): number {
        return parseInt(ST10_003_889.cost)
    }
}
