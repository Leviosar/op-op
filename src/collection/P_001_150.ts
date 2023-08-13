
import Card from "../entities/Card";

export default class P_001_150 extends Card {
    public static id: string = "P_001_150";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[DON!! x2] This character gains<Rush> (This Character can attack the turn it enters play.)\r\n";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-001_8f6d6b_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_001_150.id
    }
    
    public getType() {
        return P_001_150.type
    }
    
    public getImage() {
        return P_001_150.image
    }
    
    public getName() {
        return P_001_150._name
    }
}
