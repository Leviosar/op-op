
import Card from "../entities/Card";

export default class P_039_791 extends Card {
    public static id: string = "P_039_791";
    
    public static _name: string = "Bellamy";

    public effect: string = "<Banish>\r\n[DON!! x2] If you have 0 Life, this Character gains +2000 Power.";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-039_b108c8_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_039_791.id
    }
    
    public getType() {
        return P_039_791.type
    }
    
    public getImage() {
        return P_039_791.image
    }
    
    public getName() {
        return P_039_791._name
    }
}
