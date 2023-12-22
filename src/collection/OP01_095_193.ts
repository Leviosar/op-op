
import Card from "../entities/Card";

export default class OP01_095_193 extends Card {
    public static id: string = "OP01_095_193";
    
    public static _name: string = "Kyoshirou";

    public effect: string = "[On Play] If you have 8 or more DON!! cards on your field, draw 1 card";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-095_c7eef3_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return OP01_095_193.id
    }
    
    public getType() {
        return OP01_095_193.type
    }
    
    public getImage() {
        return OP01_095_193.image
    }
    
    public getName() {
        return OP01_095_193._name
    }
    
    public getCost(): number {
        return parseInt(OP01_095_193.cost)
    }
}
