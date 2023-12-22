
import Card from "../entities/Card";

export default class OP01_042_176 extends Card {
    public static id: string = "OP01_042_176";
    
    public static _name: string = "Komurasaki";

    public effect: string = "[On Play] (3) (You may rest the specified number of DON!! cards in your cost area.): If your Leader is [Kozuki Oden], set 1 of your {Wano Country} type Character cards with a cost of 3 or less as active.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-042_eefb8b_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "1";
    
    public getId() {
        return OP01_042_176.id
    }
    
    public getType() {
        return OP01_042_176.type
    }
    
    public getImage() {
        return OP01_042_176.image
    }
    
    public getName() {
        return OP01_042_176._name
    }
    
    public getCost(): number {
        return parseInt(OP01_042_176.cost)
    }
}
