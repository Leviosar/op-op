
import Card from "../entities/Card";

export default class OP02_015_447 extends Card {
    public static id: string = "OP02_015_447";
    
    public static _name: string = "Makino";

    public effect: string = "[Activate: Main] You may rest this Character: Up to 1 of your red Characters with a cost of 1 gains +3000 power during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-015_bf2c1a_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return OP02_015_447.id
    }
    
    public getType() {
        return OP02_015_447.type
    }
    
    public getImage() {
        return OP02_015_447.image
    }
    
    public getName() {
        return OP02_015_447._name
    }
    
    public getCost(): number {
        return parseInt(OP02_015_447.cost)
    }
}
