
import Card from "../entities/Card";

export default class ST07_003_543 extends Card {
    public static id: string = "ST07_003_543";
    
    public static _name: string = "Charlotte Katakuri";

    public effect: string = "[On Play] Look at up to 1 Life card from the top of your or your opponent's Life Area and put it either on the top or the bottom of the Life Area. Then, if you have less Life Cards than your opponent, this Character gains <Rush>";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST07-003_4cc212_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST07_003_543.id
    }
    
    public getType() {
        return ST07_003_543.type
    }
    
    public getImage() {
        return ST07_003_543.image
    }
    
    public getName() {
        return ST07_003_543._name
    }
}
