
import Card from "../entities/Card";

export default class ST06_008_288 extends Card {
    public static id: string = "ST06_008_288";
    
    public static _name: string = "Hina";

    public effect: string = "[On Play] For this turn, -4 cost for up to one of your opponent's characters.";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-008_41235a_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return ST06_008_288.id
    }
    
    public getType() {
        return ST06_008_288.type
    }
    
    public getImage() {
        return ST06_008_288.image
    }
    
    public getName() {
        return ST06_008_288._name
    }
    
    public getCost(): number {
        return parseInt(ST06_008_288.cost)
    }
}
