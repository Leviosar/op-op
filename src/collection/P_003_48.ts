
import Card from "../entities/Card";

export default class P_003_48 extends Card {
    public static id: string = "P_003_48";
    
    public static _name: string = "Eustass \"Captain\" Kid";

    public effect: string = "[DON!! x2] This character gains <Double Attack> (The damage this character deals to your opponent's Leader becomes 2)";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-003_82d953_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return P_003_48.id
    }
    
    public getType() {
        return P_003_48.type
    }
    
    public getImage() {
        return P_003_48.image
    }
    
    public getName() {
        return P_003_48._name
    }
    
    public getCost(): number {
        return parseInt(P_003_48.cost)
    }
}
