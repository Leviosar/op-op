
import Card from "../entities/Card";

export default class OP03_026_636 extends Card {
    public static id: string = "OP03_026_636";
    
    public static _name: string = "Kuroobi";

    public effect: string = "[On Play] If your Leader has the {East Blue} type, rest up to 1 of your opponent's Characters.\r\n\r\n[Trigger] Play this card.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-026_b0abc1_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP03_026_636.id
    }
    
    public getType() {
        return OP03_026_636.type
    }
    
    public getImage() {
        return OP03_026_636.image
    }
    
    public getName() {
        return OP03_026_636._name
    }
    
    public getCost(): number {
        return parseInt(OP03_026_636.cost)
    }
}
