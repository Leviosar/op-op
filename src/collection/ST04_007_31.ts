
import Card from "../entities/Card";

export default class ST04_007_31 extends Card {
    public static id: string = "ST04_007_31";
    
    public static _name: string = "Sasaki";

    public effect: string = "[On Play] [Don!! -1] You can draw 1 card.";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-007_0ad50d_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return ST04_007_31.id
    }
    
    public getType() {
        return ST04_007_31.type
    }
    
    public getImage() {
        return ST04_007_31.image
    }
    
    public getName() {
        return ST04_007_31._name
    }
    
    public getCost(): number {
        return parseInt(ST04_007_31.cost)
    }
}
