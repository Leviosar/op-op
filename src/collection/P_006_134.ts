
import Card from "../entities/Card";

export default class P_006_134 extends Card {
    public static id: string = "P_006_134";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[DON!! x2] [Your Turn] This Character gains +2000 Power.\r\n";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-006_463c9b_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return P_006_134.id
    }
    
    public getType() {
        return P_006_134.type
    }
    
    public getImage() {
        return P_006_134.image
    }
    
    public getName() {
        return P_006_134._name
    }
    
    public getCost(): number {
        return parseInt(P_006_134.cost)
    }
}
