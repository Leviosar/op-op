
import Card from "../entities/Card";

export default class ST07_006_593 extends Card {
    public static id: string = "ST07_006_593";
    
    public static _name: string = "Charlotte Snack";

    public effect: string = "[DON!!x1] [When Attacking] You may add the top or bottom card of your Life area to your hand: This Character gains <Banish> and 1000 power for this battle.";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-006_017638_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return ST07_006_593.id
    }
    
    public getType() {
        return ST07_006_593.type
    }
    
    public getImage() {
        return ST07_006_593.image
    }
    
    public getName() {
        return ST07_006_593._name
    }
    
    public getCost(): number {
        return parseInt(ST07_006_593.cost)
    }
}
