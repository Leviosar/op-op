
import Card from "../entities/Card";

export default class OP02_039_461 extends Card {
    public static id: string = "OP02_039_461";
    
    public static _name: string = "Nekomamushi";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-039_561997_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return OP02_039_461.id
    }
    
    public getType() {
        return OP02_039_461.type
    }
    
    public getImage() {
        return OP02_039_461.image
    }
    
    public getName() {
        return OP02_039_461._name
    }
    
    public getCost(): number {
        return parseInt(OP02_039_461.cost)
    }
}
