
import Card from "../entities/Card";

export default class ST07_013_567 extends Card {
    public static id: string = "ST07_013_567";
    
    public static _name: string = "Prometheus";

    public effect: string = "[Activate:Main] You may rest this card: Up to 1 of your [Charlotte Linlin] gain <Double Attack> during this turn.\r\n[Trigger] Play this card";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-013_696b91_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return ST07_013_567.id
    }
    
    public getType() {
        return ST07_013_567.type
    }
    
    public getImage() {
        return ST07_013_567.image
    }
    
    public getName() {
        return ST07_013_567._name
    }
    
    public getCost(): number {
        return parseInt(ST07_013_567.cost)
    }
}
