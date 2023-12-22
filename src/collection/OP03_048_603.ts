
import Card from "../entities/Card";

export default class OP03_048_603 extends Card {
    public static id: string = "OP03_048_603";
    
    public static _name: string = "Nojiko";

    public effect: string = "[On Play] If your Leader is [Nami], return up to 1 of your opponent's Characters with a cost of 5 or less to its owner's hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-048_af96a7_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP03_048_603.id
    }
    
    public getType() {
        return OP03_048_603.type
    }
    
    public getImage() {
        return OP03_048_603.image
    }
    
    public getName() {
        return OP03_048_603._name
    }
    
    public getCost(): number {
        return parseInt(OP03_048_603.cost)
    }
}
