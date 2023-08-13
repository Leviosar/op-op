
import Card from "../entities/Card";

export default class P_037_789 extends Card {
    public static id: string = "P_037_789";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "[When Attacking] If you have 2 or more rested Characters, this Character gains +1000 Power during this turn.";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-037_2bd593_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_037_789.id
    }
    
    public getType() {
        return P_037_789.type
    }
    
    public getImage() {
        return P_037_789.image
    }
    
    public getName() {
        return P_037_789._name
    }
}
