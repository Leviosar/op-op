
import Card from "../entities/Card";

export default class OP04_036_818 extends Card {
    public static id: string = "OP04_036_818";
    
    public static _name: string = "Donquixote Family";

    public effect: string = "[Counter] Look at 5 cards from the top of your deck; reveal up to 1 {Donquixote Pirates} type card and add it to your hand. Then, place the rest at the bottom of your deck in any order.\r\n[Trigger] Activate this card's [Counter] effect.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-036_83a467_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "1";
    
    public getId() {
        return OP04_036_818.id
    }
    
    public getType() {
        return OP04_036_818.type
    }
    
    public getImage() {
        return OP04_036_818.image
    }
    
    public getName() {
        return OP04_036_818._name
    }
    
    public getCost(): number {
        return parseInt(OP04_036_818.cost)
    }
}
