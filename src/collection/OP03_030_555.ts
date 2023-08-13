
import Card from "../entities/Card";

export default class OP03_030_555 extends Card {
    public static id: string = "OP03_030_555";
    
    public static _name: string = "Nami";

    public effect: string = "[On Play] Look at the top 5 cards of your deck; reveal 1 green {East Blue} type card other than [Nami] and add it to your hand. Then, place the remaining cards at the bottom of the deck in any order.\r\n\r\n[Trigger] Play this card.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-024_a1d194_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_030_555.id
    }
    
    public getType() {
        return OP03_030_555.type
    }
    
    public getImage() {
        return OP03_030_555.image
    }
    
    public getName() {
        return OP03_030_555._name
    }
}
