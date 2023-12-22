
import Card from "../entities/Card";

export default class OP03_059_620 extends Card {
    public static id: string = "OP03_059_620";
    
    public static _name: string = "Kaku";

    public effect: string = "[When Attacking] [DON!! -1] This Character gains <Banish> for the turn.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-059_fd329c_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return OP03_059_620.id
    }
    
    public getType() {
        return OP03_059_620.type
    }
    
    public getImage() {
        return OP03_059_620.image
    }
    
    public getName() {
        return OP03_059_620._name
    }
    
    public getCost(): number {
        return parseInt(OP03_059_620.cost)
    }
}