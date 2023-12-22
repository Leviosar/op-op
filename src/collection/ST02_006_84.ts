
import Card from "../entities/Card";

export default class ST02_006_84 extends Card {
    public static id: string = "ST02_006_84";
    
    public static _name: string = "X Drake";

    public effect: string = "[DON!!x1] [During your Turn] While this character is rested, +1000 Power for all your Marines and Supernova Characters and Leader.\r\n[Counter +1000]";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-006_120abd_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return ST02_006_84.id
    }
    
    public getType() {
        return ST02_006_84.type
    }
    
    public getImage() {
        return ST02_006_84.image
    }
    
    public getName() {
        return ST02_006_84._name
    }
    
    public getCost(): number {
        return parseInt(ST02_006_84.cost)
    }
}
