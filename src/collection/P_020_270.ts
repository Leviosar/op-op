
import Card from "../entities/Card";

export default class P_020_270 extends Card {
    public static id: string = "P_020_270";
    
    public static _name: string = "Helmeppo";

    public effect: string = "[On Play] Your Leader or up to 1 of your Characters gains +1000 Power during this turn.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-020_25336e_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return P_020_270.id
    }
    
    public getType() {
        return P_020_270.type
    }
    
    public getImage() {
        return P_020_270.image
    }
    
    public getName() {
        return P_020_270._name
    }
    
    public getCost(): number {
        return parseInt(P_020_270.cost)
    }
}
