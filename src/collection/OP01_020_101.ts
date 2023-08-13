
import Card from "../entities/Card";

export default class OP01_020_101 extends Card {
    public static id: string = "OP01_020_101";
    
    public static _name: string = "Hyogoro";

    public effect: string = "[Activate Main] You may rest this Character: Your Leader or 1 of your Character gains +2000 Power during this turn.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP01-020_be7d36_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP01_020_101.id
    }
    
    public getType() {
        return OP01_020_101.type
    }
    
    public getImage() {
        return OP01_020_101.image
    }
    
    public getName() {
        return OP01_020_101._name
    }
}
