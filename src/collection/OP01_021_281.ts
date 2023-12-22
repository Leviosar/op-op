
import Card from "../entities/Card";

export default class OP01_021_281 extends Card {
    public static id: string = "OP01_021_281";
    
    public static _name: string = "Franky";

    public effect: string = "[DON!!x1] This character can attack your opponent's active characters.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-021_7a907a_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP01_021_281.id
    }
    
    public getType() {
        return OP01_021_281.type
    }
    
    public getImage() {
        return OP01_021_281.image
    }
    
    public getName() {
        return OP01_021_281._name
    }
    
    public getCost(): number {
        return parseInt(OP01_021_281.cost)
    }
}
