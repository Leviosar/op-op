
import Card from "../entities/Card";

export default class ST06_016_293 extends Card {
    public static id: string = "ST06_016_293";
    
    public static _name: string = "White Out";

    public effect: string = "[Counter] Give up to 1 of your Leader or Characters +2000 Power during this battle.\r\n[Trigger] Draw 1. Your Characters cannot be K.O.'d during this turn.";
    
    public source: string = "Navy [ST-06]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST06-016_49cf4e_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return ST06_016_293.id
    }
    
    public getType() {
        return ST06_016_293.type
    }
    
    public getImage() {
        return ST06_016_293.image
    }
    
    public getName() {
        return ST06_016_293._name
    }
}
