
import Card from "../entities/Card";

export default class OP02_042_462 extends Card {
    public static id: string = "OP02_042_462";
    
    public static _name: string = "Yamato";

    public effect: string = "Also treat this card's name as [Kozuki Oden] according to the rules.\r\n[On Play] Rest up to 1 of your opponent's Characters with a cost of 6 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-042_a5fb03_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP02_042_462.id
    }
    
    public getType() {
        return OP02_042_462.type
    }
    
    public getImage() {
        return OP02_042_462.image
    }
    
    public getName() {
        return OP02_042_462._name
    }
    
    public getCost(): number {
        return parseInt(OP02_042_462.cost)
    }
}
