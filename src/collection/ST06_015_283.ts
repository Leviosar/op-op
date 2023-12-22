
import Card from "../entities/Card";

export default class ST06_015_283 extends Card {
    public static id: string = "ST06_015_283";
    
    public static _name: string = "Great Eruption";

    public effect: string = "[Main] Draw 1 card. One of your opponent's Characters Cost -2 for this turn.\r\n[Trigger] Your opponent picks 1 card from their own hand and trashes it.\r\n";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-015_21b9be_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "1";
    
    public getId() {
        return ST06_015_283.id
    }
    
    public getType() {
        return ST06_015_283.type
    }
    
    public getImage() {
        return ST06_015_283.image
    }
    
    public getName() {
        return ST06_015_283._name
    }
    
    public getCost(): number {
        return parseInt(ST06_015_283.cost)
    }
}
