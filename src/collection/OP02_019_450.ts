
import Card from "../entities/Card";

export default class OP02_019_450 extends Card {
    public static id: string = "OP02_019_450";
    
    public static _name: string = "Rakuyo";

    public effect: string = "[DON!! x1] [Your Turn] All of your Characters with a type including \"Whitebeard Pirates\" gain +1000 power.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-019_240104_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP02_019_450.id
    }
    
    public getType() {
        return OP02_019_450.type
    }
    
    public getImage() {
        return OP02_019_450.image
    }
    
    public getName() {
        return OP02_019_450._name
    }
    
    public getCost(): number {
        return parseInt(OP02_019_450.cost)
    }
}
