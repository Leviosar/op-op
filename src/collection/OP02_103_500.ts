
import Card from "../entities/Card";

export default class OP02_103_500 extends Card {
    public static id: string = "OP02_103_500";
    
    public static _name: string = "Sengoku";

    public effect: string = "[DON!! x1] [When Attacking] Give up to 1 of your opponent's Characters −2 cost during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-103_d10cf8_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP02_103_500.id
    }
    
    public getType() {
        return OP02_103_500.type
    }
    
    public getImage() {
        return OP02_103_500.image
    }
    
    public getName() {
        return OP02_103_500._name
    }
    
    public getCost(): number {
        return parseInt(OP02_103_500.cost)
    }
}
