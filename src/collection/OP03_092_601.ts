
import Card from "../entities/Card";

export default class OP03_092_601 extends Card {
    public static id: string = "OP03_092_601";
    
    public static _name: string = "Rob Lucci";

    public effect: string = "[On Play] You may return 2 cards with a type including \"CP\" from your trash to the bottom of your deck in any order: This Character gains <Rush> for the turn";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-092_657d25_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_092_601.id
    }
    
    public getType() {
        return OP03_092_601.type
    }
    
    public getImage() {
        return OP03_092_601.image
    }
    
    public getName() {
        return OP03_092_601._name
    }
}
