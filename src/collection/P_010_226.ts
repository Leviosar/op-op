
import Card from "../entities/Card";

export default class P_010_226 extends Card {
    public static id: string = "P_010_226";
    
    public static _name: string = "Kaido";

    public effect: string = "[End of your turn] Add 1 card from your DON!! deck and set it as active.";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-010_353d29_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_010_226.id
    }
    
    public getType() {
        return P_010_226.type
    }
    
    public getImage() {
        return P_010_226.image
    }
    
    public getName() {
        return P_010_226._name
    }
}
