
import Card from "../entities/Card";

export default class OP03_122_714 extends Card {
    public static id: string = "OP03_122_714";
    
    public static _name: string = "Sogeking";

    public effect: string = "This Character is also called \"Usopp\"\r\n[On Play] Return a Character that costs 6 or less to their owner's hand. Then, draw 2 cards and trash 2 cards.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-122_df3093_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "7";
    
    public getId() {
        return OP03_122_714.id
    }
    
    public getType() {
        return OP03_122_714.type
    }
    
    public getImage() {
        return OP03_122_714.image
    }
    
    public getName() {
        return OP03_122_714._name
    }
    
    public getCost(): number {
        return parseInt(OP03_122_714.cost)
    }
}
