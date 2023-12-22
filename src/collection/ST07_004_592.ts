
import Card from "../entities/Card";

export default class ST07_004_592 extends Card {
    public static id: string = "ST07_004_592";
    
    public static _name: string = "Charlotte Snack";

    public effect: string = "[DON!!x1] [When Attacking] You may add the top or bottom card of your Life area to your hand: This Character gains <Banish> and 1000 power for this battle.";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-004_5443e0_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return ST07_004_592.id
    }
    
    public getType() {
        return ST07_004_592.type
    }
    
    public getImage() {
        return ST07_004_592.image
    }
    
    public getName() {
        return ST07_004_592._name
    }
    
    public getCost(): number {
        return parseInt(ST07_004_592.cost)
    }
}
