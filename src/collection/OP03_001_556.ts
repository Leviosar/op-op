
import Card from "../entities/Card";

export default class OP03_001_556 extends Card {
    public static id: string = "OP03_001_556";
    
    public static _name: string = "Portgas D. Ace";

    public effect: string = "When this Leader attacks or is being attacked, you may trash any number of Event or Stage cards from your hand. For each card you trashed, +1000 Power for this Leader during this battle.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-001_c8d86f_jp.jpg";
    
    public static type: string = "leader";
    
    public static cost: string = "None";
    
    public getId() {
        return OP03_001_556.id
    }
    
    public getType() {
        return OP03_001_556.type
    }
    
    public getImage() {
        return OP03_001_556.image
    }
    
    public getName() {
        return OP03_001_556._name
    }
    
    public getCost(): number {
        return parseInt(OP03_001_556.cost)
    }
}
