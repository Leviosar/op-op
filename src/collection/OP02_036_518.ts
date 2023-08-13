
import Card from "../entities/Card";

export default class OP02_036_518 extends Card {
    public static id: string = "OP02_036_518";
    
    public static _name: string = "Nami";

    public effect: string = "[On Play] / [When Attacking] (1) : Look at the top 3 cards of your deck, reveal up to 1 {FILM} type card other than [Nami] and add it to your hand. Then, place the rest at the bottom of your deck in any order.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-036_36b2bf_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_036_518.id
    }
    
    public getType() {
        return OP02_036_518.type
    }
    
    public getImage() {
        return OP02_036_518.image
    }
    
    public getName() {
        return OP02_036_518._name
    }
}
