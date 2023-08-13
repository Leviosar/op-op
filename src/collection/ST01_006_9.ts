
import Card from "../entities/Card";

export default class ST01_006_9 extends Card {
    public static id: string = "ST01_006_9";
    
    public static _name: string = "Tony Tony Chopper";

    public effect: string = "<Blocker>(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST01-006_26d3d1_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST01_006_9.id
    }
    
    public getType() {
        return ST01_006_9.type
    }
    
    public getImage() {
        return ST01_006_9.image
    }
    
    public getName() {
        return ST01_006_9._name
    }
}
