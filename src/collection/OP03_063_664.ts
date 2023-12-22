
import Card from "../entities/Card";

export default class OP03_063_664 extends Card {
    public static id: string = "OP03_063_664";
    
    public static _name: string = "Zambai";

    public effect: string = "<Blocker>\r\n[On Play] DON!! -1: If your Leader has the {Water 7} type, Draw 1 card.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-063_2ec682_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP03_063_664.id
    }
    
    public getType() {
        return OP03_063_664.type
    }
    
    public getImage() {
        return OP03_063_664.image
    }
    
    public getName() {
        return OP03_063_664._name
    }
    
    public getCost(): number {
        return parseInt(OP03_063_664.cost)
    }
}
