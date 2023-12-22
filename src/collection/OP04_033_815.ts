
import Card from "../entities/Card";

export default class OP04_033_815 extends Card {
    public static id: string = "OP04_033_815";
    
    public static _name: string = "Machvise";

    public effect: string = "[On Play] If your Leader has the {Donquixote Pirates} type, rest up to 1 of your opponent's Characters with a cost of 5 or less. Then, set up to 1 of your DON!! cards as active at the end of this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-033_e2760a_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP04_033_815.id
    }
    
    public getType() {
        return OP04_033_815.type
    }
    
    public getImage() {
        return OP04_033_815.image
    }
    
    public getName() {
        return OP04_033_815._name
    }
    
    public getCost(): number {
        return parseInt(OP04_033_815.cost)
    }
}
