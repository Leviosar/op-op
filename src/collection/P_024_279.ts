
import Card from "../entities/Card";

export default class P_024_279 extends Card {
    public static id: string = "P_024_279";
    
    public static _name: string = "I will become the Pirate King!!!!";

    public effect: string = "[Main] Your leader gets +1000 power during this turn for each of your Characters.\r\n[Trigger] Your leader or 1 of your Characters gets +1000 power during this turn.";
    
    public source: string = "Promo [P]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/P-024_96fafd_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return P_024_279.id
    }
    
    public getType() {
        return P_024_279.type
    }
    
    public getImage() {
        return P_024_279.image
    }
    
    public getName() {
        return P_024_279._name
    }
}
