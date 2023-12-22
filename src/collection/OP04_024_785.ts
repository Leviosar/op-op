
import Card from "../entities/Card";

export default class OP04_024_785 extends Card {
    public static id: string = "OP04_024_785";
    
    public static _name: string = "Sugar";

    public effect: string = "[Opponent's Turn] [Once Per Turn] When your opponent plays a Character card, if your Leader has the {Donquixote Pirates} type, rest up to 1 of your opponent's Characters. Then, rest this card.\r\n[On Play] Rest up to 1 of your opponent's Characters with a cost of 4 or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-024_daa422_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP04_024_785.id
    }
    
    public getType() {
        return OP04_024_785.type
    }
    
    public getImage() {
        return OP04_024_785.image
    }
    
    public getName() {
        return OP04_024_785._name
    }
    
    public getCost(): number {
        return parseInt(OP04_024_785.cost)
    }
}