
import Card from "../entities/Card";

export default class OP03_028_639 extends Card {
    public static id: string = "OP03_028_639";
    
    public static _name: string = "Django";

    public effect: string = "[On Play] Choose 1 of the following effects.\r\n- Set up to 1 of your Leader or Characters with a cost of 6 or less with the {East Blue} type as active.\r\n- Rest this Character and up to 1 of your opponent's Characters.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-028_eda9ac_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_028_639.id
    }
    
    public getType() {
        return OP03_028_639.type
    }
    
    public getImage() {
        return OP03_028_639.image
    }
    
    public getName() {
        return OP03_028_639._name
    }
}
