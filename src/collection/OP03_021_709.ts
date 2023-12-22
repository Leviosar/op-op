
import Card from "../entities/Card";

export default class OP03_021_709 extends Card {
    public static id: string = "OP03_021_709";
    
    public static _name: string = "Kuro";

    public effect: string = "[Activate:Main] (3), you may rest 2 Characters with the {East Blue} type: Set this Leader to active and rest up to 1 of your opponent's Characters that costs 5 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-021_551916_jp.jpg";
    
    public static type: string = "leader";
    
    public static cost: string = "None";
    
    public getId() {
        return OP03_021_709.id
    }
    
    public getType() {
        return OP03_021_709.type
    }
    
    public getImage() {
        return OP03_021_709.image
    }
    
    public getName() {
        return OP03_021_709._name
    }
    
    public getCost(): number {
        return parseInt(OP03_021_709.cost)
    }
}
