
import Card from "../entities/Card";

export default class OP02_110_352 extends Card {
    public static id: string = "OP02_110_352";
    
    public static _name: string = "Hina";

    public effect: string = "<Blocker>\r\n[On Block] Choose up to 1 of your opponent's cost 6 or lower Characters. The chosen Character cannot attack during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-110_0c7bf1_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return OP02_110_352.id
    }
    
    public getType() {
        return OP02_110_352.type
    }
    
    public getImage() {
        return OP02_110_352.image
    }
    
    public getName() {
        return OP02_110_352._name
    }
    
    public getCost(): number {
        return parseInt(OP02_110_352.cost)
    }
}
