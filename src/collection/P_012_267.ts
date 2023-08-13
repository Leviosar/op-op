
import Card from "../entities/Card";

export default class P_012_267 extends Card {
    public static id: string = "P_012_267";
    
    public static _name: string = "Uta";

    public effect: string = "[Activate: Main] [Once per turn] (1) (You may rest the designated number for DON!! in your Cost Area): Up to 1 of your Characters without effects gain +2000 Power during this turn.";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-012_7cea29_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_012_267.id
    }
    
    public getType() {
        return P_012_267.type
    }
    
    public getImage() {
        return P_012_267.image
    }
    
    public getName() {
        return P_012_267._name
    }
}
