
import Card from "../entities/Card";

export default class OP02_036_340 extends Card {
    public static id: string = "OP02_036_340";
    
    public static _name: string = "Nami";

    public effect: string = "[On Play] / [When Attacking] (1) : Look at the top 3 cards of your deck, reveal up to 1 {FILM} type card other than [Nami] and add it to your hand. Then, place the rest at the bottom of your deck in any order.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-036_c68c76_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP02_036_340.id
    }
    
    public getType() {
        return OP02_036_340.type
    }
    
    public getImage() {
        return OP02_036_340.image
    }
    
    public getName() {
        return OP02_036_340._name
    }
    
    public getCost(): number {
        return parseInt(OP02_036_340.cost)
    }
}
