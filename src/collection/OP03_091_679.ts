
import Card from "../entities/Card";

export default class OP03_091_679 extends Card {
    public static id: string = "OP03_091_679";
    
    public static _name: string = "Helmeppo";

    public effect: string = "[On Play] Reduce the Cost of up to 1 of your opponent's Characters without any original effects to 0 during this turn.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-091_e360ad_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return OP03_091_679.id
    }
    
    public getType() {
        return OP03_091_679.type
    }
    
    public getImage() {
        return OP03_091_679.image
    }
    
    public getName() {
        return OP03_091_679._name
    }
    
    public getCost(): number {
        return parseInt(OP03_091_679.cost)
    }
}
