
import Card from "../entities/Card";

export default class P_019_275 extends Card {
    public static id: string = "P_019_275";
    
    public static _name: string = "Bepo";

    public effect: string = "[DON!! x1] [When attacking] K.O. up to 1 of your opponent's Characters with 3000 or less Power.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-019_1e4916_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return P_019_275.id
    }
    
    public getType() {
        return P_019_275.type
    }
    
    public getImage() {
        return P_019_275.image
    }
    
    public getName() {
        return P_019_275._name
    }
    
    public getCost(): number {
        return parseInt(P_019_275.cost)
    }
}
