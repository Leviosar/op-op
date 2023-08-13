
import Card from "../entities/Card";

export default class OP04_086_853 extends Card {
    public static id: string = "OP04_086_853";
    
    public static _name: string = "Chinjao";

    public effect: string = "[DON!! x1] When this Character battles and K.O.'s your opponent's Character, draw 2 cards and trash 2 cards from your hand.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-086_0a6ccb_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_086_853.id
    }
    
    public getType() {
        return OP04_086_853.type
    }
    
    public getImage() {
        return OP04_086_853.image
    }
    
    public getName() {
        return OP04_086_853._name
    }
}
