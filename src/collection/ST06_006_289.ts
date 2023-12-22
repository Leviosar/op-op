
import Card from "../entities/Card";

export default class ST06_006_289 extends Card {
    public static id: string = "ST06_006_289";
    
    public static _name: string = "Tashigi";

    public effect: string = "[Activate: Main] You may rest this Character: For this turn, -2 cost for up to one of your opponent's Characters.";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-006_d849ff_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return ST06_006_289.id
    }
    
    public getType() {
        return ST06_006_289.type
    }
    
    public getImage() {
        return ST06_006_289.image
    }
    
    public getName() {
        return ST06_006_289._name
    }
    
    public getCost(): number {
        return parseInt(ST06_006_289.cost)
    }
}
