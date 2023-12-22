
import Card from "../entities/Card";

export default class OP03_066_609 extends Card {
    public static id: string = "OP03_066_609";
    
    public static _name: string = "Paulie";

    public effect: string = "[On Play] (2): Add up to 1 DON!! from your DON!! deck and set it as active. Then, if you have 8 or more DON!! in play, K.O. up to 1 of your opponent's Characters with a cost of 4 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-066_2b2e1e_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return OP03_066_609.id
    }
    
    public getType() {
        return OP03_066_609.type
    }
    
    public getImage() {
        return OP03_066_609.image
    }
    
    public getName() {
        return OP03_066_609._name
    }
    
    public getCost(): number {
        return parseInt(OP03_066_609.cost)
    }
}
