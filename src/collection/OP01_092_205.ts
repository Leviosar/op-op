
import Card from "../entities/Card";

export default class OP01_092_205 extends Card {
    public static id: string = "OP01_092_205";
    
    public static _name: string = "King";

    public effect: string = "[Your Turn] If you have 10 DON!! cards on your field, give all of your opponent's Characters -1000 power.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-092_8df8b7_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "7";
    
    public getId() {
        return OP01_092_205.id
    }
    
    public getType() {
        return OP01_092_205.type
    }
    
    public getImage() {
        return OP01_092_205.image
    }
    
    public getName() {
        return OP01_092_205._name
    }
    
    public getCost(): number {
        return parseInt(OP01_092_205.cost)
    }
}
