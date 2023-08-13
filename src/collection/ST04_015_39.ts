
import Card from "../entities/Card";

export default class ST04_015_39 extends Card {
    public static id: string = "ST04_015_39";
    
    public static _name: string = "Brachio Bomber";

    public effect: string = "[Main] K.O. 1 of your opponent's Characters witha  cost of 6 or less. Then add 1 DON!! card from your DON!! deck to your Cost Area active.\r\n[Trigger]: Add 1 DON!! card from your DON!! deck to your Cost Area active.";
    
    public source: string = "Animal Kingdom Pirates [ST-04]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/ST04-015_65be70_jp.jpg";
    
    public static type = "event";
    
    public getId() {
        return ST04_015_39.id
    }
    
    public getType() {
        return ST04_015_39.type
    }
    
    public getImage() {
        return ST04_015_39.image
    }
    
    public getName() {
        return ST04_015_39._name
    }
}
