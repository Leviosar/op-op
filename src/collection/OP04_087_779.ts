
import Card from "../entities/Card";

export default class OP04_087_779 extends Card {
    public static id: string = "OP04_087_779";
    
    public static _name: string = "Cavendish";

    public effect: string = "[DON!! x1] This Character can attack active Characters. \r\n[When Attacking] You may rest your Leader: K.O. up to 1 of your opponent's Characters that cost 1 or less. Then, trash 2 cards form the top of your deck.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-087_f25392_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return OP04_087_779.id
    }
    
    public getType() {
        return OP04_087_779.type
    }
    
    public getImage() {
        return OP04_087_779.image
    }
    
    public getName() {
        return OP04_087_779._name
    }
    
    public getCost(): number {
        return parseInt(OP04_087_779.cost)
    }
}
