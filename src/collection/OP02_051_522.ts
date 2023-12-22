
import Card from "../entities/Card";

export default class OP02_051_522 extends Card {
    public static id: string = "OP02_051_522";
    
    public static _name: string = "Emporio Ivankov";

    public effect: string = "[On Play] Draw cards until you have 3 cards in your hand, then play up to 1 blue {Impel Down} type Character card with a cost of 6 or less from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-051_1c06fa_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "7";
    
    public getId() {
        return OP02_051_522.id
    }
    
    public getType() {
        return OP02_051_522.type
    }
    
    public getImage() {
        return OP02_051_522.image
    }
    
    public getName() {
        return OP02_051_522._name
    }
    
    public getCost(): number {
        return parseInt(OP02_051_522.cost)
    }
}