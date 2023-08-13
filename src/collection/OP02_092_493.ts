
import Card from "../entities/Card";

export default class OP02_092_493 extends Card {
    public static id: string = "OP02_092_493";
    
    public static _name: string = "Impel Down";

    public effect: string = "[Activate: Main] You may trash 1 card from your hand and rest this Stage: Look at 3 cards from the top of your deck; reveal up to 1 {Impel Down} type card and add it to your hand. Then, place the rest at the bottom of your deck in any order.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-092_d56817_jp.jpg";
    
    public static type = "stage";
    
    public getId() {
        return OP02_092_493.id
    }
    
    public getType() {
        return OP02_092_493.type
    }
    
    public getImage() {
        return OP02_092_493.image
    }
    
    public getName() {
        return OP02_092_493._name
    }
}
