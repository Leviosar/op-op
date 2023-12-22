
import Card from "../entities/Card";

export default class ST01_013_11 extends Card {
    public static id: string = "ST01_013_11";
    
    public static _name: string = "Roronoa Zoro";

    public effect: string = "[DON!!x1] This Character gains +1000 power.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-013_60b716_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return ST01_013_11.id
    }
    
    public getType() {
        return ST01_013_11.type
    }
    
    public getImage() {
        return ST01_013_11.image
    }
    
    public getName() {
        return ST01_013_11._name
    }
    
    public getCost(): number {
        return parseInt(ST01_013_11.cost)
    }
}
