
import Card from "../entities/Card";

export default class ST04_010_34 extends Card {
    public static id: string = "ST04_010_34";
    
    public static _name: string = "Who's who";

    public effect: string = "[On Play] [Don!! -1] K.O. up to one of your opponent's cost 3 or lower Characters.\r\n\r\n[Trigger] You may play this card.";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST04-010_b58a64_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return ST04_010_34.id
    }
    
    public getType() {
        return ST04_010_34.type
    }
    
    public getImage() {
        return ST04_010_34.image
    }
    
    public getName() {
        return ST04_010_34._name
    }
    
    public getCost(): number {
        return parseInt(ST04_010_34.cost)
    }
}
