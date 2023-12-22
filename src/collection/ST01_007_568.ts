
import Card from "../entities/Card";

export default class ST01_007_568 extends Card {
    public static id: string = "ST01_007_568";
    
    public static _name: string = "Nami";

    public effect: string = "[Activate: Main][Once Per Turn] Give your Leader or 1 of your Characters 1 rested DON!! card.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-007_ac55d6_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return ST01_007_568.id
    }
    
    public getType() {
        return ST01_007_568.type
    }
    
    public getImage() {
        return ST01_007_568.image
    }
    
    public getName() {
        return ST01_007_568._name
    }
    
    public getCost(): number {
        return parseInt(ST01_007_568.cost)
    }
}
