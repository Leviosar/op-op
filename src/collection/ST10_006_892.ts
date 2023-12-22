
import Card from "../entities/Card";

export default class ST10_006_892 extends Card {
    public static id: string = "ST10_006_892";
    
    public static _name: string = "Monkey.D.Luffy";

    public effect: string = "[Rush] (This card can attack on the turn in which it is played.)\r\n[Once Per Turn] When your opponent activates a [Blocker], K.O. up to 1 of your opponent's Characters with 8000 power or less.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-006_177e55_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "10";
    
    public getId() {
        return ST10_006_892.id
    }
    
    public getType() {
        return ST10_006_892.type
    }
    
    public getImage() {
        return ST10_006_892.image
    }
    
    public getName() {
        return ST10_006_892._name
    }
    
    public getCost(): number {
        return parseInt(ST10_006_892.cost)
    }
}
