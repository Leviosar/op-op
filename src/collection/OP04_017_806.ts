
import Card from "../entities/Card";

export default class OP04_017_806 extends Card {
    public static id: string = "OP04_017_806";
    
    public static _name: string = "Happiness Punch";

    public effect: string = "[Counter] Give up to 1 of your opponent's Leader or Character cards −2000 power during this turn. Then, if your Leader is active, give up to 1 of your opponent's Leader or Character cards −1000 power during this turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-017_1535d6_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "1";
    
    public getId() {
        return OP04_017_806.id
    }
    
    public getType() {
        return OP04_017_806.type
    }
    
    public getImage() {
        return OP04_017_806.image
    }
    
    public getName() {
        return OP04_017_806._name
    }
    
    public getCost(): number {
        return parseInt(OP04_017_806.cost)
    }
}
