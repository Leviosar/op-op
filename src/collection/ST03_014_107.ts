
import Card from "../entities/Card";

export default class ST03_014_107 extends Card {
    public static id: string = "ST03_014_107";
    
    public static _name: string = "Marshall D. Teach";

    public effect: string = "[On Play] Return a Character that costs 3 or less to their owner's hand";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-014_05ecda_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return ST03_014_107.id
    }
    
    public getType() {
        return ST03_014_107.type
    }
    
    public getImage() {
        return ST03_014_107.image
    }
    
    public getName() {
        return ST03_014_107._name
    }
    
    public getCost(): number {
        return parseInt(ST03_014_107.cost)
    }
}
