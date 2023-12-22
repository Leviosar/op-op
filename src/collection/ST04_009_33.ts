
import Card from "../entities/Card";

export default class ST04_009_33 extends Card {
    public static id: string = "ST04_009_33";
    
    public static _name: string = "Jack";

    public effect: string = "[On Play] You may trash one card from your hand: Reveal one DON!! from your DON!! deck in Active.";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-009_2cd3ff_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return ST04_009_33.id
    }
    
    public getType() {
        return ST04_009_33.type
    }
    
    public getImage() {
        return ST04_009_33.image
    }
    
    public getName() {
        return ST04_009_33._name
    }
    
    public getCost(): number {
        return parseInt(ST04_009_33.cost)
    }
}
