
import Card from "../entities/Card";

export default class ST03_017_53 extends Card {
    public static id: string = "ST03_017_53";
    
    public static _name: string = "Love Love Beam";

    public effect: string = "[Counter] Your Leader or up to 1 of your Characters gains 4000 Power for the duration of the battle. Then, if you have 3 or less cards in hand, draw 1.";
    
    public source: string = "The Seven Warlords of the Sea [ST-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-017_1445ae_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "2";
    
    public getId() {
        return ST03_017_53.id
    }
    
    public getType() {
        return ST03_017_53.type
    }
    
    public getImage() {
        return ST03_017_53.image
    }
    
    public getName() {
        return ST03_017_53._name
    }
    
    public getCost(): number {
        return parseInt(ST03_017_53.cost)
    }
}
