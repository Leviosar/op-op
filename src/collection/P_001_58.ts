
import Card from "../entities/Card";

export default class P_001_58 extends Card {
    public static id: string = "P_001_58";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[DON!! x2] This character gains<Rush> (This Character can attack the turn it enters play.)\r\n";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-001_b30b49_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_001_58.id
    }
    
    public getType() {
        return P_001_58.type
    }
    
    public getImage() {
        return P_001_58.image
    }
    
    public getName() {
        return P_001_58._name
    }
}
