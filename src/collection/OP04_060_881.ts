
import Card from "../entities/Card";

export default class OP04_060_881 extends Card {
    public static id: string = "OP04_060_881";
    
    public static _name: string = "Crocodile";

    public effect: string = "[On Play] DON!! -2: If your Leader's type includes \"Baroque Works\", place up to 1 card from the top of your deck on top of your Life.\r\n[On Your Opponent's Attack] [Once per Turn] [DON!! -1] Draw 1 card and trash 1 card in your hand.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP04-060_fb4be1_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP04_060_881.id
    }
    
    public getType() {
        return OP04_060_881.type
    }
    
    public getImage() {
        return OP04_060_881.image
    }
    
    public getName() {
        return OP04_060_881._name
    }
}
