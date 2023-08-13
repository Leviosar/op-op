
import Card from "../entities/Card";

export default class P_013_268 extends Card {
    public static id: string = "P_013_268";
    
    public static _name: string = "Gordon";

    public effect: string = "[Activate: Main] You can return this card to the bottom of the deck: Up to 1 of your opponent's Characters loses -3000 Power during this turn";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-013_177e05_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_013_268.id
    }
    
    public getType() {
        return P_013_268.type
    }
    
    public getImage() {
        return P_013_268.image
    }
    
    public getName() {
        return P_013_268._name
    }
}
