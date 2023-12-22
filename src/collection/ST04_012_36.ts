
import Card from "../entities/Card";

export default class ST04_012_36 extends Card {
    public static id: string = "ST04_012_36";
    
    public static _name: string = "Black Maria";

    public effect: string = "<Blocker>";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-012_94a7e2_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return ST04_012_36.id
    }
    
    public getType() {
        return ST04_012_36.type
    }
    
    public getImage() {
        return ST04_012_36.image
    }
    
    public getName() {
        return ST04_012_36._name
    }
    
    public getCost(): number {
        return parseInt(ST04_012_36.cost)
    }
}
