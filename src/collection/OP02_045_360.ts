
import Card from "../entities/Card";

export default class OP02_045_360 extends Card {
    public static id: string = "OP02_045_360";
    
    public static _name: string = "Three Sword Style: Oni Giri";

    public effect: string = "[Counter] Up to 1 of your Leader or Characters gains +6000 Power during this battle. Then, you may play up to 1 cost 3 or lower Character card without effects from your hand.\r\n[Trigger] Rest up to 1 of your opponent's Leader or cost 5 or lower Characters.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-045_756ad0_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP02_045_360.id
    }
    
    public getType() {
        return OP02_045_360.type
    }
    
    public getImage() {
        return OP02_045_360.image
    }
    
    public getName() {
        return OP02_045_360._name
    }
}
