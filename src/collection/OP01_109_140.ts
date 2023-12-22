
import Card from "../entities/Card";

export default class OP01_109_140 extends Card {
    public static id: string = "OP01_109_140";
    
    public static _name: string = "Who's.Who";

    public effect: string = "[DON!!x1][Your Turn] As long as there are 8 or more DON!! on your field, this Character gains +1000 power.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-109_b1724f_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP01_109_140.id
    }
    
    public getType() {
        return OP01_109_140.type
    }
    
    public getImage() {
        return OP01_109_140.image
    }
    
    public getName() {
        return OP01_109_140._name
    }
    
    public getCost(): number {
        return parseInt(OP01_109_140.cost)
    }
}
