
import Card from "../entities/Card";

export default class OP01_059_187 extends Card {
    public static id: string = "OP01_059_187";
    
    public static _name: string = "Beben!!";

    public effect: string = "[Main] You may trash 1 {Wano Country} type card from your hand: Set 1 of your {Wano Country} type Character cards with a cost of 3 or less as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-059_2f2ba7_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "3";
    
    public getId() {
        return OP01_059_187.id
    }
    
    public getType() {
        return OP01_059_187.type
    }
    
    public getImage() {
        return OP01_059_187.image
    }
    
    public getName() {
        return OP01_059_187._name
    }
    
    public getCost(): number {
        return parseInt(OP01_059_187.cost)
    }
}
