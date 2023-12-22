
import Card from "../entities/Card";

export default class OP02_102_499 extends Card {
    public static id: string = "OP02_102_499";
    
    public static _name: string = "Smoker";

    public effect: string = "This Character cannot be K.O.'d by effects.\r\n[When Attacking] If there is a Character with a cost of 0 in play, this Character gains +2000 power during this battle.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-102_fed282_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP02_102_499.id
    }
    
    public getType() {
        return OP02_102_499.type
    }
    
    public getImage() {
        return OP02_102_499.image
    }
    
    public getName() {
        return OP02_102_499._name
    }
    
    public getCost(): number {
        return parseInt(OP02_102_499.cost)
    }
}
