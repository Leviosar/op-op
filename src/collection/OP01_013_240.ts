
import Card from "../entities/Card";

export default class OP01_013_240 extends Card {
    public static id: string = "OP01_013_240";
    
    public static _name: string = "Sanji";

    public effect: string = "[Activate: Main] [Once Per Turn] (Take 1 Life card and put it in your hand): This turn: +2000 power for this Character. Then, give this character up to 2 of your rested DON!!";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-013_6bbb9a_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP01_013_240.id
    }
    
    public getType() {
        return OP01_013_240.type
    }
    
    public getImage() {
        return OP01_013_240.image
    }
    
    public getName() {
        return OP01_013_240._name
    }
    
    public getCost(): number {
        return parseInt(OP01_013_240.cost)
    }
}
