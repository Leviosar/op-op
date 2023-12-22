
import Card from "../entities/Card";

export default class OP04_037_819 extends Card {
    public static id: string = "OP04_037_819";
    
    public static _name: string = "Flapping Thread";

    public effect: string = "[Counter] If your Leader has the {Donquixote Pirates} type, up to 1 of your Leader or Character cards gains +2000 power during this turn.\r\n[Trigger] K.O. up to 1 of your opponent's rested Characters with a cost of 4 or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-037_f9365a_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "2";
    
    public getId() {
        return OP04_037_819.id
    }
    
    public getType() {
        return OP04_037_819.type
    }
    
    public getImage() {
        return OP04_037_819.image
    }
    
    public getName() {
        return OP04_037_819._name
    }
    
    public getCost(): number {
        return parseInt(OP04_037_819.cost)
    }
}
