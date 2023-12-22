
import Card from "../entities/Card";

export default class ST07_016_589 extends Card {
    public static id: string = "ST07_016_589";
    
    public static _name: string = "Power Mochi";

    public effect: string = "[Counter] Look at up to 1 Life card from the top of your or your opponent's Life Area and put it either on the top or the bottom of the Life Area. Then, up to 1 of your Leader or Characters gains +2000 Power for this battle.\r\n\r\n[Trigger] Draw 1 card. Look at up to 1 Life card from the top of your or your opponent's Life Area and put it either on the top or the bottom of the Life Area.";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-016_1ed109_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "1";
    
    public getId() {
        return ST07_016_589.id
    }
    
    public getType() {
        return ST07_016_589.type
    }
    
    public getImage() {
        return ST07_016_589.image
    }
    
    public getName() {
        return ST07_016_589._name
    }
    
    public getCost(): number {
        return parseInt(ST07_016_589.cost)
    }
}
