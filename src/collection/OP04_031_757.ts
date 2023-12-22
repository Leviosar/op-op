
import Card from "../entities/Card";

export default class OP04_031_757 extends Card {
    public static id: string = "OP04_031_757";
    
    public static _name: string = "Donquixote Doflamingo";

    public effect: string = "[On Play] A total of up to 3 of your opponent's rested Characters or Leaders do not become active during your opponent's next refresh phase.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-031_e61c29_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "10";
    
    public getId() {
        return OP04_031_757.id
    }
    
    public getType() {
        return OP04_031_757.type
    }
    
    public getImage() {
        return OP04_031_757.image
    }
    
    public getName() {
        return OP04_031_757._name
    }
    
    public getCost(): number {
        return parseInt(OP04_031_757.cost)
    }
}
