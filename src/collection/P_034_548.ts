
import Card from "../entities/Card";

export default class P_034_548 extends Card {
    public static id: string = "P_034_548";
    
    public static _name: string = "Sanji";

    public effect: string = "[DON!! x1] [Your Turn] While your Life area has 2 or less cards, this Character gains +2000 power.";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-034_7ffef2_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_034_548.id
    }
    
    public getType() {
        return P_034_548.type
    }
    
    public getImage() {
        return P_034_548.image
    }
    
    public getName() {
        return P_034_548._name
    }
}
