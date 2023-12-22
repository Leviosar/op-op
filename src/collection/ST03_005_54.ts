
import Card from "../entities/Card";

export default class ST03_005_54 extends Card {
    public static id: string = "ST03_005_54";
    
    public static _name: string = "Dracule Mihawk";

    public effect: string = "[DON!! x1] [When attacking] Draw 2 cards, then trash 2 cards from your hand.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-005_d49403_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return ST03_005_54.id
    }
    
    public getType() {
        return ST03_005_54.type
    }
    
    public getImage() {
        return ST03_005_54.image
    }
    
    public getName() {
        return ST03_005_54._name
    }
    
    public getCost(): number {
        return parseInt(ST03_005_54.cost)
    }
}
