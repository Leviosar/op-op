
import Card from "../entities/Card";

export default class ST10_004_890 extends Card {
    public static id: string = "ST10_004_890";
    
    public static _name: string = "Sanji";

    public effect: string = "[On Play] If your opponent has a Character with 5000 or more power, this Character gains [Rush] during this turn.\r\n(This card can attack on the turn in which it is played.)";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST10-004_9b4b15_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "6";
    
    public getId() {
        return ST10_004_890.id
    }
    
    public getType() {
        return ST10_004_890.type
    }
    
    public getImage() {
        return ST10_004_890.image
    }
    
    public getName() {
        return ST10_004_890._name
    }
    
    public getCost(): number {
        return parseInt(ST10_004_890.cost)
    }
}
