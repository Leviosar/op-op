
import Card from "../entities/Card";

export default class OP01_016_136 extends Card {
    public static id: string = "OP01_016_136";
    
    public static _name: string = "Nami";

    public effect: string = "[On Play] Look at the top 5 cards of your deck, reveal 1 {Straw Hat Crew} type card other than [Nami] and add it to your hand. Place the remaining cards at the bottom of the deck in any order.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-016_2df168_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_016_136.id
    }
    
    public getType() {
        return OP01_016_136.type
    }
    
    public getImage() {
        return OP01_016_136.image
    }
    
    public getName() {
        return OP01_016_136._name
    }
}
