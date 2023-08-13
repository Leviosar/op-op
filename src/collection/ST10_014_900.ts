
import Card from "../entities/Card";

export default class ST10_014_900 extends Card {
    public static id: string = "ST10_014_900";
    
    public static _name: string = "Wire";

    public effect: string = "[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n[Once Per Turn] When a DON!! card on your field is returned to your DON!! deck, draw 1 card and trash 1 card from your hand.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST10-014_4d07ae_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST10_014_900.id
    }
    
    public getType() {
        return ST10_014_900.type
    }
    
    public getImage() {
        return ST10_014_900.image
    }
    
    public getName() {
        return ST10_014_900._name
    }
}
