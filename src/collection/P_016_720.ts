
import Card from "../entities/Card";

export default class P_016_720 extends Card {
    public static id: string = "P_016_720";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[When Attacking] You may add the top or bottom card of your Life area to your hand: Up to 1 of this Character and your Leader gains +1000 power for this turn.";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-016_76bfff_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_016_720.id
    }
    
    public getType() {
        return P_016_720.type
    }
    
    public getImage() {
        return P_016_720.image
    }
    
    public getName() {
        return P_016_720._name
    }
}
