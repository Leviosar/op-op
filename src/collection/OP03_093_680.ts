
import Card from "../entities/Card";

export default class OP03_093_680 extends Card {
    public static id: string = "OP03_093_680";
    
    public static _name: string = "Wanze";

    public effect: string = "[On Play] You may discard 1 card from your hand: If your Leader has {CP} in its type, K.O. up to 1 of your opponent's Characters with a cost of 1 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-093_5b65bd_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP03_093_680.id
    }
    
    public getType() {
        return OP03_093_680.type
    }
    
    public getImage() {
        return OP03_093_680.image
    }
    
    public getName() {
        return OP03_093_680._name
    }
    
    public getCost(): number {
        return parseInt(OP03_093_680.cost)
    }
}
