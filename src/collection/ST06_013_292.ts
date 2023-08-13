
import Card from "../entities/Card";

export default class ST06_013_292 extends Card {
    public static id: string = "ST06_013_292";
    
    public static _name: string = "Impact Wave";

    public effect: string = "[Counter] Give up to 1 of your Leader or Characters +4000 Power during this battle. Then, K.O. up to 1 of your opponent's active Characters with a cost of 3 or less.\r\n[Trigger] K.O. up to 1 of your opponent's cost 4 or lower Characters.";
    
    public source: string = "Navy [ST-06]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST06-013_9f4d9e_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return ST06_013_292.id
    }
    
    public getType() {
        return ST06_013_292.type
    }
    
    public getImage() {
        return ST06_013_292.image
    }
    
    public getName() {
        return ST06_013_292._name
    }
}
