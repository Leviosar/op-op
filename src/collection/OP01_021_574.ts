
import Card from "../entities/Card";

export default class OP01_021_574 extends Card {
    public static id: string = "OP01_021_574";
    
    public static _name: string = "Franky";

    public effect: string = "[DON!!x1] This character can attack your opponent's active characters.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-021_745e2c_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP01_021_574.id
    }
    
    public getType() {
        return OP01_021_574.type
    }
    
    public getImage() {
        return OP01_021_574.image
    }
    
    public getName() {
        return OP01_021_574._name
    }
    
    public getCost(): number {
        return parseInt(OP01_021_574.cost)
    }
}
