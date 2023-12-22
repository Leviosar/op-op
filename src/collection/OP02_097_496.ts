
import Card from "../entities/Card";

export default class OP02_097_496 extends Card {
    public static id: string = "OP02_097_496";
    
    public static _name: string = "Onigumo";

    public effect: string = "If there is a Character with a cost of 0, this Character gains [Banish].";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-097_be65f7_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return OP02_097_496.id
    }
    
    public getType() {
        return OP02_097_496.type
    }
    
    public getImage() {
        return OP02_097_496.image
    }
    
    public getName() {
        return OP02_097_496._name
    }
    
    public getCost(): number {
        return parseInt(OP02_097_496.cost)
    }
}
