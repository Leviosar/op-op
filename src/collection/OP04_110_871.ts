
import Card from "../entities/Card";

export default class OP04_110_871 extends Card {
    public static id: string = "OP04_110_871";
    
    public static _name: string = "Pound";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n[On K.O.] Add up to 1 of your opponent's Characters with a cost of 3 or less to the top or bottom of your opponent's Life cards face-up.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-110_085485_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP04_110_871.id
    }
    
    public getType() {
        return OP04_110_871.type
    }
    
    public getImage() {
        return OP04_110_871.image
    }
    
    public getName() {
        return OP04_110_871._name
    }
    
    public getCost(): number {
        return parseInt(OP04_110_871.cost)
    }
}
