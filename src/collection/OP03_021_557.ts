
import Card from "../entities/Card";

export default class OP03_021_557 extends Card {
    public static id: string = "OP03_021_557";
    
    public static _name: string = "Kuro";

    public effect: string = "[Activate:Main] (3), you may rest 2 Characters with the {East Blue} type: Set this Leader to active and rest up to 1 of your opponent's Characters that costs 5 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-021_df5b32_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return OP03_021_557.id
    }
    
    public getType() {
        return OP03_021_557.type
    }
    
    public getImage() {
        return OP03_021_557.image
    }
    
    public getName() {
        return OP03_021_557._name
    }
}
