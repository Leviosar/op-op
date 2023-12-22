
import Card from "../entities/Card";

export default class OP02_020_451 extends Card {
    public static id: string = "OP02_020_451";
    
    public static _name: string = "Rakuyo";

    public effect: string = "[DON!! x1] [Your Turn] All of your Characters with a type including \"Whitebeard Pirates\" gain +1000 power.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-020_1fb7f9_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "7";
    
    public getId() {
        return OP02_020_451.id
    }
    
    public getType() {
        return OP02_020_451.type
    }
    
    public getImage() {
        return OP02_020_451.image
    }
    
    public getName() {
        return OP02_020_451._name
    }
    
    public getCost(): number {
        return parseInt(OP02_020_451.cost)
    }
}
