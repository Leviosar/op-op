
import Card from "../entities/Card";

export default class P_007_223 extends Card {
    public static id: string = "P_007_223";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[DON!! x1] This Character cannot be K.O.'d in battle with <Strike> attribute Leader or Characters.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-007_541a3f_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return P_007_223.id
    }
    
    public getType() {
        return P_007_223.type
    }
    
    public getImage() {
        return P_007_223.image
    }
    
    public getName() {
        return P_007_223._name
    }
    
    public getCost(): number {
        return parseInt(P_007_223.cost)
    }
}
