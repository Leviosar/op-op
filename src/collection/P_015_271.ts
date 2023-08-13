
import Card from "../entities/Card";

export default class P_015_271 extends Card {
    public static id: string = "P_015_271";
    
    public static _name: string = "Helmeppo";

    public effect: string = "[On Play] Your Leader or up to 1 of your Characters gains +1000 Power during this turn.";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-015_c7045f_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_015_271.id
    }
    
    public getType() {
        return P_015_271.type
    }
    
    public getImage() {
        return P_015_271.image
    }
    
    public getName() {
        return P_015_271._name
    }
}
