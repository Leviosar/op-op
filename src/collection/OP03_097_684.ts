
import Card from "../entities/Card";

export default class OP03_097_684 extends Card {
    public static id: string = "OP03_097_684";
    
    public static _name: string = "Six King Pistol";

    public effect: string = "[Counter] You may trash 1 card from your hand: Up to 1 of your Leader or Characters gains +3000 power during this battle.\r\n[Trigger] Draw 1 card. Then, K.O. up to 1 of your opponent’s Characters with a cost of 1 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-097_c107a2_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP03_097_684.id
    }
    
    public getType() {
        return OP03_097_684.type
    }
    
    public getImage() {
        return OP03_097_684.image
    }
    
    public getName() {
        return OP03_097_684._name
    }
}
