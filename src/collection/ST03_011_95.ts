
import Card from "../entities/Card";

export default class ST03_011_95 extends Card {
    public static id: string = "ST03_011_95";
    
    public static _name: string = "Sentomaru";

    public effect: string = "[DON!! x1] [Activate Main] [Once Per Turn] (2) (Rest the designated amount of DON!! cards in your Cost Area.): Play up to 1 cost 4 or lower [Pacifista] from your deck. Then, shuffle your deck.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-011_b28325_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return ST03_011_95.id
    }
    
    public getType() {
        return ST03_011_95.type
    }
    
    public getImage() {
        return ST03_011_95.image
    }
    
    public getName() {
        return ST03_011_95._name
    }
    
    public getCost(): number {
        return parseInt(ST03_011_95.cost)
    }
}
