
import Card from "../entities/Card";

export default class P_018_274 extends Card {
    public static id: string = "P_018_274";
    
    public static _name: string = "Bartolomeo";

    public effect: string = "<Blocker>(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-018_c98b74_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_018_274.id
    }
    
    public getType() {
        return P_018_274.type
    }
    
    public getImage() {
        return P_018_274.image
    }
    
    public getName() {
        return P_018_274._name
    }
}
