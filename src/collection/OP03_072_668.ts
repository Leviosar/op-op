
import Card from "../entities/Card";

export default class OP03_072_668 extends Card {
    public static id: string = "OP03_072_668";
    
    public static _name: string = "Gum Gum Jet Gatling";

    public effect: string = "[Counter] You may trash 1 card from your hand: Up to 1 of your Characters or Leader, +3000 power for this battle.\r\n[Trigger] Add up to 1 DON!! card from your DON!! deck and set it as active.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-072_f79a0a_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "0";
    
    public getId() {
        return OP03_072_668.id
    }
    
    public getType() {
        return OP03_072_668.type
    }
    
    public getImage() {
        return OP03_072_668.image
    }
    
    public getName() {
        return OP03_072_668._name
    }
    
    public getCost(): number {
        return parseInt(OP03_072_668.cost)
    }
}
