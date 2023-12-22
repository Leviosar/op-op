
import Card from "../entities/Card";

export default class OP04_035_817 extends Card {
    public static id: string = "OP04_035_817";
    
    public static _name: string = "Spiderweb";

    public effect: string = "[Counter] Up to 1 of your Leader or Character cards gains +4000 power during this battle. Then, set up to 1 of your Characters as active.\r\n[Trigger] Up to 1 of your Leader gains +2000 power during this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-035_c206eb_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "2";
    
    public getId() {
        return OP04_035_817.id
    }
    
    public getType() {
        return OP04_035_817.type
    }
    
    public getImage() {
        return OP04_035_817.image
    }
    
    public getName() {
        return OP04_035_817._name
    }
    
    public getCost(): number {
        return parseInt(OP04_035_817.cost)
    }
}
