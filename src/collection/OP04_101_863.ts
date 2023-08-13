
import Card from "../entities/Card";

export default class OP04_101_863 extends Card {
    public static id: string = "OP04_101_863";
    
    public static _name: string = "Carmel";

    public effect: string = "[Your Turn] [On Play] Draw 1 card.\r\n[Trigger] Play this card. Then, K.O. up to 1 of your opponent's Characters with a cost of 2 or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-101_8c67e3_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_101_863.id
    }
    
    public getType() {
        return OP04_101_863.type
    }
    
    public getImage() {
        return OP04_101_863.image
    }
    
    public getName() {
        return OP04_101_863._name
    }
}
