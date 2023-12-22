
import Card from "../entities/Card";

export default class OP02_111_351 extends Card {
    public static id: string = "OP02_111_351";
    
    public static _name: string = "Fullbody";

    public effect: string = "[When Attacking] If you have [Django] in play, this Character gains +3000 Power during this battle.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-111_58cd34_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP02_111_351.id
    }
    
    public getType() {
        return OP02_111_351.type
    }
    
    public getImage() {
        return OP02_111_351.image
    }
    
    public getName() {
        return OP02_111_351._name
    }
    
    public getCost(): number {
        return parseInt(OP02_111_351.cost)
    }
}
