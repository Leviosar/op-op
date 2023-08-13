
import Card from "../entities/Card";

export default class OP01_077_63 extends Card {
    public static id: string = "OP01_077_63";
    
    public static _name: string = "Perona";

    public effect: string = "[On Play] Look at the top 5 cards of your deck, rearrange them in any order, then return them to the top or bottom of the deck.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-077_2f4494_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_077_63.id
    }
    
    public getType() {
        return OP01_077_63.type
    }
    
    public getImage() {
        return OP01_077_63.image
    }
    
    public getName() {
        return OP01_077_63._name
    }
}
