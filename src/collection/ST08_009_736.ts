
import Card from "../entities/Card";

export default class ST08_009_736 extends Card {
    public static id: string = "ST08_009_736";
    
    public static _name: string = "Makino";

    public effect: string = "[On Play] If there is a Character with a Cost of 0 in play, draw 1 card.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-009_f0b395_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return ST08_009_736.id
    }
    
    public getType() {
        return ST08_009_736.type
    }
    
    public getImage() {
        return ST08_009_736.image
    }
    
    public getName() {
        return ST08_009_736._name
    }
    
    public getCost(): number {
        return parseInt(ST08_009_736.cost)
    }
}