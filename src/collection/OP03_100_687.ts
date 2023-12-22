
import Card from "../entities/Card";

export default class OP03_100_687 extends Card {
    public static id: string = "OP03_100_687";
    
    public static _name: string = "King Baum";

    public effect: string = "[Trigger] You may trash the top or bottom card of your Life: Play this card.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-100_836889_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP03_100_687.id
    }
    
    public getType() {
        return OP03_100_687.type
    }
    
    public getImage() {
        return OP03_100_687.image
    }
    
    public getName() {
        return OP03_100_687._name
    }
    
    public getCost(): number {
        return parseInt(OP03_100_687.cost)
    }
}
