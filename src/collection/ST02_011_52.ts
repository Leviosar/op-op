
import Card from "../entities/Card";

export default class ST02_011_52 extends Card {
    public static id: string = "ST02_011_52";
    
    public static _name: string = "Heat";

    public effect: string = "[Counter+1000]";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-011_104b84_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return ST02_011_52.id
    }
    
    public getType() {
        return ST02_011_52.type
    }
    
    public getImage() {
        return ST02_011_52.image
    }
    
    public getName() {
        return ST02_011_52._name
    }
    
    public getCost(): number {
        return parseInt(ST02_011_52.cost)
    }
}