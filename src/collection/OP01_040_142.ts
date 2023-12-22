
import Card from "../entities/Card";

export default class OP01_040_142 extends Card {
    public static id: string = "OP01_040_142";
    
    public static _name: string = "Kin'emon";

    public effect: string = "[On Play] If your Leader is [Kozuki Oden], you can play 1 cost 3 or lower {Nine Red Scabbards} type Character card from your hand.\r\n[DON!! x1][When attacking][Once per turn] Set 1 of your cost 3 or lower {Nine Red Scabbards} type Characters as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-040_5cda36_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "6";
    
    public getId() {
        return OP01_040_142.id
    }
    
    public getType() {
        return OP01_040_142.type
    }
    
    public getImage() {
        return OP01_040_142.image
    }
    
    public getName() {
        return OP01_040_142._name
    }
    
    public getCost(): number {
        return parseInt(OP01_040_142.cost)
    }
}
