
import Card from "../entities/Card";

export default class OP04_111_872 extends Card {
    public static id: string = "OP04_111_872";
    
    public static _name: string = "Hera";

    public effect: string = "[Activate: Main] You may trash 1 of your {Homies} type Characters other than this Character and rest this Character: Set up to 1 of your [Charlotte Linlin] Characters as active.\r\n[Trigger] Play this card.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-111_7e946f_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_111_872.id
    }
    
    public getType() {
        return OP04_111_872.type
    }
    
    public getImage() {
        return OP04_111_872.image
    }
    
    public getName() {
        return OP04_111_872._name
    }
}
