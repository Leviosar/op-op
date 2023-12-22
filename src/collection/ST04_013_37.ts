
import Card from "../entities/Card";

export default class ST04_013_37 extends Card {
    public static id: string = "ST04_013_37";
    
    public static _name: string = "Black Maria";

    public effect: string = "<Blocker>";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-013_2e656f_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return ST04_013_37.id
    }
    
    public getType() {
        return ST04_013_37.type
    }
    
    public getImage() {
        return ST04_013_37.image
    }
    
    public getName() {
        return ST04_013_37._name
    }
    
    public getCost(): number {
        return parseInt(ST04_013_37.cost)
    }
}
