
import Card from "../entities/Card";

export default class OP02_108_531 extends Card {
    public static id: string = "OP02_108_531";
    
    public static _name: string = "Donquixote Rosinante";

    public effect: string = "<Blocker>";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-108_56a658_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP02_108_531.id
    }
    
    public getType() {
        return OP02_108_531.type
    }
    
    public getImage() {
        return OP02_108_531.image
    }
    
    public getName() {
        return OP02_108_531._name
    }
    
    public getCost(): number {
        return parseInt(OP02_108_531.cost)
    }
}
