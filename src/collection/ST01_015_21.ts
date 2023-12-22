
import Card from "../entities/Card";

export default class ST01_015_21 extends Card {
    public static id: string = "ST01_015_21";
    
    public static _name: string = "Jet Pistol";

    public effect: string = "[Main] K.O. 1 of your opponent's Characters with a power of 6000 or less.\r\n[Trigger]: Activate this card's Main effect.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-015_b1a089_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "4";
    
    public getId() {
        return ST01_015_21.id
    }
    
    public getType() {
        return ST01_015_21.type
    }
    
    public getImage() {
        return ST01_015_21.image
    }
    
    public getName() {
        return ST01_015_21._name
    }
    
    public getCost(): number {
        return parseInt(ST01_015_21.cost)
    }
}