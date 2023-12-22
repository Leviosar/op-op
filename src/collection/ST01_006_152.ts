
import Card from "../entities/Card";

export default class ST01_006_152 extends Card {
    public static id: string = "ST01_006_152";
    
    public static _name: string = "Tony Tony Chopper";

    public effect: string = "<Blocker>(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-006_78e412_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return ST01_006_152.id
    }
    
    public getType() {
        return ST01_006_152.type
    }
    
    public getImage() {
        return ST01_006_152.image
    }
    
    public getName() {
        return ST01_006_152._name
    }
    
    public getCost(): number {
        return parseInt(ST01_006_152.cost)
    }
}
