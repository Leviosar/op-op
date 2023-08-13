
import Card from "../entities/Card";

export default class P_017_273 extends Card {
    public static id: string = "P_017_273";
    
    public static _name: string = "Trafalgar Law";

    public effect: string = "[On Play] Up to 1 of your opponent's Characters lose -2000 Power during this turn.";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-017_c8589d_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_017_273.id
    }
    
    public getType() {
        return P_017_273.type
    }
    
    public getImage() {
        return P_017_273.image
    }
    
    public getName() {
        return P_017_273._name
    }
}
