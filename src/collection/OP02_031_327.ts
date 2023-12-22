
import Card from "../entities/Card";

export default class OP02_031_327 extends Card {
    public static id: string = "OP02_031_327";
    
    public static _name: string = "Kozuki Toki";

    public effect: string = "If you control a [Kozuki Oden] Character, this Character gains <Blocker>";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-031_0c630e_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return OP02_031_327.id
    }
    
    public getType() {
        return OP02_031_327.type
    }
    
    public getImage() {
        return OP02_031_327.image
    }
    
    public getName() {
        return OP02_031_327._name
    }
    
    public getCost(): number {
        return parseInt(OP02_031_327.cost)
    }
}
