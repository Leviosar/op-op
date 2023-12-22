
import Card from "../entities/Card";

export default class ST01_008_247 extends Card {
    public static id: string = "ST01_008_247";
    
    public static _name: string = "Tony Tony Chopper";

    public effect: string = "<Blocker>(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-008_badd0c_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return ST01_008_247.id
    }
    
    public getType() {
        return ST01_008_247.type
    }
    
    public getImage() {
        return ST01_008_247.image
    }
    
    public getName() {
        return ST01_008_247._name
    }
    
    public getCost(): number {
        return parseInt(ST01_008_247.cost)
    }
}
