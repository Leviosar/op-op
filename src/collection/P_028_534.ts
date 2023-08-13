
import Card from "../entities/Card";

export default class P_028_534 extends Card {
    public static id: string = "P_028_534";
    
    public static _name: string = "Portgas. D. Ace";

    public effect: string = "<Double Attack> (The damage this character deals to your opponent's Leader becomes 2)";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-013_89a520_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_028_534.id
    }
    
    public getType() {
        return P_028_534.type
    }
    
    public getImage() {
        return P_028_534.image
    }
    
    public getName() {
        return P_028_534._name
    }
}
