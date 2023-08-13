
import Card from "../entities/Card";

export default class OP04_040_768 extends Card {
    public static id: string = "OP04_040_768";
    
    public static _name: string = "Queen";

    public effect: string = "[DON!! x1] [When Attacking] If the total number of cards in your Life and hand is 4 or less, draw 1 card. If you have a Character with a cost of 8 or more, you may place up to 1 card from the top of your deck on top of your Life instead of drawing 1 card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-040_5c063b_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return OP04_040_768.id
    }
    
    public getType() {
        return OP04_040_768.type
    }
    
    public getImage() {
        return OP04_040_768.image
    }
    
    public getName() {
        return OP04_040_768._name
    }
}
