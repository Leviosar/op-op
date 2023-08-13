
import Card from "../entities/Card";

export default class OP03_027_637 extends Card {
    public static id: string = "OP03_027_637";
    
    public static _name: string = "Sham";

    public effect: string = "[On Play] If your Leader has the {East Blue} type, rest up to 1 of your opponent's Characters with a cost of 2 or less. Then, if you don't have [Butchie] in play, play 1 [Butchie] from your hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-027_ad1a84_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_027_637.id
    }
    
    public getType() {
        return OP03_027_637.type
    }
    
    public getImage() {
        return OP03_027_637.image
    }
    
    public getName() {
        return OP03_027_637._name
    }
}
