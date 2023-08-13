
import Card from "../entities/Card";

export default class P_026_347 extends Card {
    public static id: string = "P_026_347";
    
    public static _name: string = "Morgan";

    public effect: string = "[When Attacking] Give up to 1 of your opponent's Characters -3 to their cost this turn.";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-026_191c7b_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_026_347.id
    }
    
    public getType() {
        return P_026_347.type
    }
    
    public getImage() {
        return P_026_347.image
    }
    
    public getName() {
        return P_026_347._name
    }
}
