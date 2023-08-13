
import Card from "../entities/Card";

export default class ST03_004_104 extends Card {
    public static id: string = "ST03_004_104";
    
    public static _name: string = "Gecko Moria";

    public effect: string = "[On Play] Add 1 {The Seven Warlords of the Sea} or {Thriller Bark Pirates} type Character with a cost of 4 or less other than [Gecko Moria] from your trash to your hand.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST03-004_13f97b_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST03_004_104.id
    }
    
    public getType() {
        return ST03_004_104.type
    }
    
    public getImage() {
        return ST03_004_104.image
    }
    
    public getName() {
        return ST03_004_104._name
    }
}
