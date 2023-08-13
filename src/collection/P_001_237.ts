
import Card from "../entities/Card";

export default class P_001_237 extends Card {
    public static id: string = "P_001_237";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[DON!! x2] This character gains<Rush> (This card can attack on the turn in which it is played.)\r\n";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-001_3d7d66_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_001_237.id
    }
    
    public getType() {
        return P_001_237.type
    }
    
    public getImage() {
        return P_001_237.image
    }
    
    public getName() {
        return P_001_237._name
    }
}
