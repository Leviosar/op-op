
import Card from "../entities/Card";

export default class OP02_011_325 extends Card {
    public static id: string = "OP02_011_325";
    
    public static _name: string = "Vista";

    public effect: string = "[On Play] K.O up to one of your opponent's Characters with 3000 power or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-011_db264a_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP02_011_325.id
    }
    
    public getType() {
        return OP02_011_325.type
    }
    
    public getImage() {
        return OP02_011_325.image
    }
    
    public getName() {
        return OP02_011_325._name
    }
    
    public getCost(): number {
        return parseInt(OP02_011_325.cost)
    }
}
