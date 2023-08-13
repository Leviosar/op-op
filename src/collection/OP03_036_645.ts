
import Card from "../entities/Card";

export default class OP03_036_645 extends Card {
    public static id: string = "OP03_036_645";
    
    public static _name: string = "Out-of-the-Bag";

    public effect: string = "[Main] You may rest 1 of your {East Blue} type Characters: Set up to 1 of your [Kuro] as active.\r\n\r\n[Trigger] K.O. up to 1 of your opponent's rested characters with a cost of 3 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-036_f1b4ac_jp.png";
    
    public static type = "event";
    
    public getId() {
        return OP03_036_645.id
    }
    
    public getType() {
        return OP03_036_645.type
    }
    
    public getImage() {
        return OP03_036_645.image
    }
    
    public getName() {
        return OP03_036_645._name
    }
}
