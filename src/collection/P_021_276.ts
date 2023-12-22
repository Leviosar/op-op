
import Card from "../entities/Card";

export default class P_021_276 extends Card {
    public static id: string = "P_021_276";
    
    public static _name: string = "Bepo";

    public effect: string = "[DON!! x1] [When attacking] K.O. up to 1 of your opponent's Characters with 3000 or less Power.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-021_ef259c_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "7";
    
    public getId() {
        return P_021_276.id
    }
    
    public getType() {
        return P_021_276.type
    }
    
    public getImage() {
        return P_021_276.image
    }
    
    public getName() {
        return P_021_276._name
    }
    
    public getCost(): number {
        return parseInt(P_021_276.cost)
    }
}