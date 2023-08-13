
import Card from "../entities/Card";

export default class ST10_017_903 extends Card {
    public static id: string = "ST10_017_903";
    
    public static _name: string = "Punk Vise";

    public effect: string = "[Main] Rest up to 1 of your opponent's Characters with a cost of 2 or less, and add up to 1 DON!! card from your DON!! deck and rest it.\r\n[Trigger] Add up to 1 DON!! card from your DON!! deck and set it as active.";
    
    public source: string = "The Three Captains [ST-10]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST10-017_d2f129_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return ST10_017_903.id
    }
    
    public getType() {
        return ST10_017_903.type
    }
    
    public getImage() {
        return ST10_017_903.image
    }
    
    public getName() {
        return ST10_017_903._name
    }
}
