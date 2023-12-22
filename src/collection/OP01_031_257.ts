
import Card from "../entities/Card";

export default class OP01_031_257 extends Card {
    public static id: string = "OP01_031_257";
    
    public static _name: string = "Kozuki Oden";

    public effect: string = "[Activate: Main] [Once Per Turn] You can trash 1 {Wano Country} type card from your hand: Set up to 2 of your DON!! cards as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-031_fdeb59_jp.jpg";
    
    public static type: string = "leader";
    
    public static cost: string = "None";
    
    public getId() {
        return OP01_031_257.id
    }
    
    public getType() {
        return OP01_031_257.type
    }
    
    public getImage() {
        return OP01_031_257.image
    }
    
    public getName() {
        return OP01_031_257._name
    }
    
    public getCost(): number {
        return parseInt(OP01_031_257.cost)
    }
}
