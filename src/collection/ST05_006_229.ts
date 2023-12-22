
import Card from "../entities/Card";

export default class ST05_006_229 extends Card {
    public static id: string = "ST05_006_229";
    
    public static _name: string = "Gild Tesoro";

    public effect: string = "[When Attacking] DON!! -2: Draw 2 cards.";
    
    public source: string = "One Piece Film Edition [ST-05]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST05-006_99517e_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return ST05_006_229.id
    }
    
    public getType() {
        return ST05_006_229.type
    }
    
    public getImage() {
        return ST05_006_229.image
    }
    
    public getName() {
        return ST05_006_229._name
    }
    
    public getCost(): number {
        return parseInt(ST05_006_229.cost)
    }
}
