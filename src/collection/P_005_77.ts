
import Card from "../entities/Card";

export default class P_005_77 extends Card {
    public static id: string = "P_005_77";
    
    public static _name: string = "Kaido";

    public effect: string = "[DON!! -2] (You may return the specified number of DON!! cards from your field to your DON!! deck) :  This Character gains <Banish> during this turn. (When this character deals damage, any Trigger effects do not activate and the life is sent to the Trash instead.)";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-005_d1b947_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return P_005_77.id
    }
    
    public getType() {
        return P_005_77.type
    }
    
    public getImage() {
        return P_005_77.image
    }
    
    public getName() {
        return P_005_77._name
    }
}
