
import Card from "../entities/Card";

export default class ST08_004_735 extends Card {
    public static id: string = "ST08_004_735";
    
    public static _name: string = "Koby";

    public effect: string = "[Activate: Main] You may rest this Character: K.O. up to 1 of your opponent's Characters with a cost of 2 or less.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-004_95e727_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return ST08_004_735.id
    }
    
    public getType() {
        return ST08_004_735.type
    }
    
    public getImage() {
        return ST08_004_735.image
    }
    
    public getName() {
        return ST08_004_735._name
    }
    
    public getCost(): number {
        return parseInt(ST08_004_735.cost)
    }
}
