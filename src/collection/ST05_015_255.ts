
import Card from "../entities/Card";

export default class ST05_015_255 extends Card {
    public static id: string = "ST05_015_255";
    
    public static _name: string = "Scarlet";

    public effect: string = "[Trigger] Play this card.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-015_cc9b87_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return ST05_015_255.id
    }
    
    public getType() {
        return ST05_015_255.type
    }
    
    public getImage() {
        return ST05_015_255.image
    }
    
    public getName() {
        return ST05_015_255._name
    }
    
    public getCost(): number {
        return parseInt(ST05_015_255.cost)
    }
}
