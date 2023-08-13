
import Card from "../entities/Card";

export default class ST07_005_564 extends Card {
    public static id: string = "ST07_005_564";
    
    public static _name: string = "Charlotte Daifuku";

    public effect: string = "[DON!!x1] [When Attacking] You may take 1 card from the top or bottom of your Life Area and put it in your hand: Put up to 1 card from the top of your deck on top of your Life Area.";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST07-005_313cbe_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST07_005_564.id
    }
    
    public getType() {
        return ST07_005_564.type
    }
    
    public getImage() {
        return ST07_005_564.image
    }
    
    public getName() {
        return ST07_005_564._name
    }
}
