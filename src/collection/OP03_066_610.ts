
import Card from "../entities/Card";

export default class OP03_066_610 extends Card {
    public static id: string = "OP03_066_610";
    
    public static _name: string = "Paulie";

    public effect: string = "[On Play] (2): Add up to 1 DON!! from your DON!! deck and set it as active. Then, if you have 8 or more DON!! in play, K.O. up to 1 of your opponent's Characters with a cost of 4 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-066_9e25d4_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_066_610.id
    }
    
    public getType() {
        return OP03_066_610.type
    }
    
    public getImage() {
        return OP03_066_610.image
    }
    
    public getName() {
        return OP03_066_610._name
    }
}
