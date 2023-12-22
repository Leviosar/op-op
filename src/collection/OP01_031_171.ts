
import Card from "../entities/Card";

export default class OP01_031_171 extends Card {
    public static id: string = "OP01_031_171";
    
    public static _name: string = "Kozuki Oden";

    public effect: string = "[Activate: Main] [Once Per Turn] You can trash 1 {Wano Country} type card from your hand: Set up to 2 of your DON!! cards as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-031_bef0b8_jp.jpg";
    
    public static type: string = "leader";
    
    public static cost: string = "None";
    
    public getId() {
        return OP01_031_171.id
    }
    
    public getType() {
        return OP01_031_171.type
    }
    
    public getImage() {
        return OP01_031_171.image
    }
    
    public getName() {
        return OP01_031_171._name
    }
    
    public getCost(): number {
        return parseInt(OP01_031_171.cost)
    }
}
