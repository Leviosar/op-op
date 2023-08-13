
import Card from "../entities/Card";

export default class OP01_088_196 extends Card {
    public static id: string = "OP01_088_196";
    
    public static _name: string = "Desert Spada";

    public effect: string = "[Counter] Your Leader or 1 of your Characters gains +2000 power during this battle. Then, look at the top 3 cards of your deck and place them at the top or bottom of the deck in any order.\r\n[Trigger] Draw 2 cards, then trash 1 card from your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-088_dc8c79_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP01_088_196.id
    }
    
    public getType() {
        return OP01_088_196.type
    }
    
    public getImage() {
        return OP01_088_196.image
    }
    
    public getName() {
        return OP01_088_196._name
    }
}
