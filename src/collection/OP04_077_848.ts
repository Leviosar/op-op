
import Card from "../entities/Card";

export default class OP04_077_848 extends Card {
    public static id: string = "OP04_077_848";
    
    public static _name: string = "Ideo";

    public effect: string = "[Blocker] (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-077_f5effa_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP04_077_848.id
    }
    
    public getType() {
        return OP04_077_848.type
    }
    
    public getImage() {
        return OP04_077_848.image
    }
    
    public getName() {
        return OP04_077_848._name
    }
    
    public getCost(): number {
        return parseInt(OP04_077_848.cost)
    }
}
