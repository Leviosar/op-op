
import Card from "../entities/Card";

export default class ST08_010_737 extends Card {
    public static id: string = "ST08_010_737";
    
    public static _name: string = "Makino";

    public effect: string = "[On Play] If there is a Character with a Cost of 0 in play, draw 1 card.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-010_66b0ba_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return ST08_010_737.id
    }
    
    public getType() {
        return ST08_010_737.type
    }
    
    public getImage() {
        return ST08_010_737.image
    }
    
    public getName() {
        return ST08_010_737._name
    }
    
    public getCost(): number {
        return parseInt(ST08_010_737.cost)
    }
}
