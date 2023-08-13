
import Card from "../entities/Card";

export default class OP03_044_607 extends Card {
    public static id: string = "OP03_044_607";
    
    public static _name: string = "Kaya";

    public effect: string = "[On Play] Draw 2 cards, then trash 2 cards from your hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-044_945282_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_044_607.id
    }
    
    public getType() {
        return OP03_044_607.type
    }
    
    public getImage() {
        return OP03_044_607.image
    }
    
    public getName() {
        return OP03_044_607._name
    }
}
