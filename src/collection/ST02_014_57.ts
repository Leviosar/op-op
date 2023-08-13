
import Card from "../entities/Card";

export default class ST02_014_57 extends Card {
    public static id: string = "ST02_014_57";
    
    public static _name: string = "X Drake";

    public effect: string = "[DON!!x1] [During your Turn] While this character is rested, +1000 Power for all your Marines and Supernova Characters and Leader.\r\n[Counter +1000]";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST02-014_44b504_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST02_014_57.id
    }
    
    public getType() {
        return ST02_014_57.type
    }
    
    public getImage() {
        return ST02_014_57.image
    }
    
    public getName() {
        return ST02_014_57._name
    }
}
