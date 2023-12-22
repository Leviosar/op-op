
import Card from "../entities/Card";

export default class P_001_236 extends Card {
    public static id: string = "P_001_236";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[DON!! x2] This character gains<Rush> (This card can attack on the turn in which it is played.)\r\n";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-001_27def7_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "6";
    
    public getId() {
        return P_001_236.id
    }
    
    public getType() {
        return P_001_236.type
    }
    
    public getImage() {
        return P_001_236.image
    }
    
    public getName() {
        return P_001_236._name
    }
    
    public getCost(): number {
        return parseInt(P_001_236.cost)
    }
}
