
import Card from "../entities/Card";

export default class OP03_056_661 extends Card {
    public static id: string = "OP03_056_661";
    
    public static _name: string = "Sanji's Pilaf";

    public effect: string = "[Main] Draw 2 cards.\r\n\r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-056_fa1f2b_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "3";
    
    public getId() {
        return OP03_056_661.id
    }
    
    public getType() {
        return OP03_056_661.type
    }
    
    public getImage() {
        return OP03_056_661.image
    }
    
    public getName() {
        return OP03_056_661._name
    }
    
    public getCost(): number {
        return parseInt(OP03_056_661.cost)
    }
}
