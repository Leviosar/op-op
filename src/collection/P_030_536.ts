
import Card from "../entities/Card";

export default class P_030_536 extends Card {
    public static id: string = "P_030_536";
    
    public static _name: string = "Jinbe";

    public effect: string = "[On K.O] Place up to 1 Character with a cost of 3 or less at the bottom of the owner's deck.";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-030_c4d170_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_030_536.id
    }
    
    public getType() {
        return P_030_536.type
    }
    
    public getImage() {
        return P_030_536.image
    }
    
    public getName() {
        return P_030_536._name
    }
}
