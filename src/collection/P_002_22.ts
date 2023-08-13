
import Card from "../entities/Card";

export default class P_002_22 extends Card {
    public static id: string = "P_002_22";
    
    public static _name: string = "I Smell Adventure Ahead";

    public effect: string = "[Main] Shuffle your hand into your deck. Then, draw a card for each card shuffled this way.\r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-002_130c0a_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return P_002_22.id
    }
    
    public getType() {
        return P_002_22.type
    }
    
    public getImage() {
        return P_002_22.image
    }
    
    public getName() {
        return P_002_22._name
    }
}
