
import Card from "../entities/Card";

export default class ST04_011_285 extends Card {
    public static id: string = "ST04_011_285";
    
    public static _name: string = "Black Maria";

    public effect: string = "<Blocker>";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-011_b4596d_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return ST04_011_285.id
    }
    
    public getType() {
        return ST04_011_285.type
    }
    
    public getImage() {
        return ST04_011_285.image
    }
    
    public getName() {
        return ST04_011_285._name
    }
    
    public getCost(): number {
        return parseInt(ST04_011_285.cost)
    }
}
