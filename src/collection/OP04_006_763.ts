
import Card from "../entities/Card";

export default class OP04_006_763 extends Card {
    public static id: string = "OP04_006_763";
    
    public static _name: string = "Koza";

    public effect: string = "[When Attacking] You may give one of your active Leaders -5000 Power this turn: This character gains +2000 Power until the start of your next turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-006_eee0c2_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP04_006_763.id
    }
    
    public getType() {
        return OP04_006_763.type
    }
    
    public getImage() {
        return OP04_006_763.image
    }
    
    public getName() {
        return OP04_006_763._name
    }
    
    public getCost(): number {
        return parseInt(OP04_006_763.cost)
    }
}
