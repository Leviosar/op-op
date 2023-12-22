
import Card from "../entities/Card";

export default class ST01_011_10 extends Card {
    public static id: string = "ST01_011_10";
    
    public static _name: string = "Brook";

    public effect: string = "[On Play] Give your Leader or one of your Characters 2 rested DON!! cards.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-011_bfdc0f_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return ST01_011_10.id
    }
    
    public getType() {
        return ST01_011_10.type
    }
    
    public getImage() {
        return ST01_011_10.image
    }
    
    public getName() {
        return ST01_011_10._name
    }
    
    public getCost(): number {
        return parseInt(ST01_011_10.cost)
    }
}
