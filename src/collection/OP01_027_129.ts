
import Card from "../entities/Card";

export default class OP01_027_129 extends Card {
    public static id: string = "OP01_027_129";
    
    public static _name: string = "Round Table";

    public effect: string = "[Main] Give 1 of your opponent's Character -10000 Power during this turn.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-027_1e3cbb_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return OP01_027_129.id
    }
    
    public getType() {
        return OP01_027_129.type
    }
    
    public getImage() {
        return OP01_027_129.image
    }
    
    public getName() {
        return OP01_027_129._name
    }
}
