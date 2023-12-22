
import Card from "../entities/Card";

export default class OP04_084_851 extends Card {
    public static id: string = "OP04_084_851";
    
    public static _name: string = "Stussy";

    public effect: string = "[On Play] Look at 3 cards from the top of your deck and play up to 1 Character card with a type including \"CP\" other than [Stussy] and a cost of 2 or less. Then, trash the rest.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-084_bfcc2d_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP04_084_851.id
    }
    
    public getType() {
        return OP04_084_851.type
    }
    
    public getImage() {
        return OP04_084_851.image
    }
    
    public getName() {
        return OP04_084_851._name
    }
    
    public getCost(): number {
        return parseInt(OP04_084_851.cost)
    }
}