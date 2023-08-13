
import Card from "../entities/Card";

export default class ST02_016_111 extends Card {
    public static id: string = "ST02_016_111";
    
    public static _name: string = "Repel";

    public effect: string = "[Counter]  Your Leader or 1 of your Characters gains +4000 Power during this battle. Then, set 1 of your DON!! rested as active.";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST02-016_0f7bd3_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return ST02_016_111.id
    }
    
    public getType() {
        return ST02_016_111.type
    }
    
    public getImage() {
        return ST02_016_111.image
    }
    
    public getName() {
        return ST02_016_111._name
    }
}
