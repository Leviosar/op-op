
import Card from "../entities/Card";

export default class ST09_006_726 extends Card {
    public static id: string = "ST09_006_726";
    
    public static _name: string = "Yamato";

    public effect: string = "[DON!! x1][Opponent's Turn] While your Life area has 2 cards or less, this Leader gains +1000 power.";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST09-006_49d7bd_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return ST09_006_726.id
    }
    
    public getType() {
        return ST09_006_726.type
    }
    
    public getImage() {
        return ST09_006_726.image
    }
    
    public getName() {
        return ST09_006_726._name
    }
    
    public getCost(): number {
        return parseInt(ST09_006_726.cost)
    }
}
