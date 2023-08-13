
import Card from "../entities/Card";

export default class OP02_059_329 extends Card {
    public static id: string = "OP02_059_329";
    
    public static _name: string = "Boa Hancock";

    public effect: string = "[When Attacking] Draw 1 card and trash 1 card from your hand. Then, trash up to 3 cards from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-059_84d3b4_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_059_329.id
    }
    
    public getType() {
        return OP02_059_329.type
    }
    
    public getImage() {
        return OP02_059_329.image
    }
    
    public getName() {
        return OP02_059_329._name
    }
}
