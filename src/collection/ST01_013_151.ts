
import Card from "../entities/Card";

export default class ST01_013_151 extends Card {
    public static id: string = "ST01_013_151";
    
    public static _name: string = "Roronoa Zoro";

    public effect: string = "[DON!!x1] This Character gains +1000 power.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST01-013_58546f_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST01_013_151.id
    }
    
    public getType() {
        return ST01_013_151.type
    }
    
    public getImage() {
        return ST01_013_151.image
    }
    
    public getName() {
        return ST01_013_151._name
    }
}
