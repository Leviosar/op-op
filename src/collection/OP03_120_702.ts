
import Card from "../entities/Card";

export default class OP03_120_702 extends Card {
    public static id: string = "OP03_120_702";
    
    public static _name: string = "Tropical Torment";

    public effect: string = "[Main] If your opponent has 4 or more Life, place up to 1 card from the top of your opponent’s Life in the trash.\r\n[Trigger] Activate this card's [Main] effect.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-120_d7cb40_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP03_120_702.id
    }
    
    public getType() {
        return OP03_120_702.type
    }
    
    public getImage() {
        return OP03_120_702.image
    }
    
    public getName() {
        return OP03_120_702._name
    }
}
