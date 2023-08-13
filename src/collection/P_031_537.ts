
import Card from "../entities/Card";

export default class P_031_537 extends Card {
    public static id: string = "P_031_537";
    
    public static _name: string = "Uta";

    public effect: string = "[On Play] Add 1 DON!! card from your DON!! deck to your Cost Area rested.";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-031_543cd1_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_031_537.id
    }
    
    public getType() {
        return P_031_537.type
    }
    
    public getImage() {
        return P_031_537.image
    }
    
    public getName() {
        return P_031_537._name
    }
}
