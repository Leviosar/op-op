
import Card from "../entities/Card";

export default class OP02_089_323 extends Card {
    public static id: string = "OP02_089_323";
    
    public static _name: string = "Hell's Judgement";

    public effect: string = "[Counter] DON!!-1: Give up to two of your opponent's Leader or Characters, -3000 Power during this turn.\r\n[Trigger] If your opponent has 6 or more DON!!, your opponent returns one of their DON!! to their DON!! deck";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-089_336391_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "2";
    
    public getId() {
        return OP02_089_323.id
    }
    
    public getType() {
        return OP02_089_323.type
    }
    
    public getImage() {
        return OP02_089_323.image
    }
    
    public getName() {
        return OP02_089_323._name
    }
    
    public getCost(): number {
        return parseInt(OP02_089_323.cost)
    }
}
