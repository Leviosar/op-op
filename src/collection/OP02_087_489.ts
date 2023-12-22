
import Card from "../entities/Card";

export default class OP02_087_489 extends Card {
    public static id: string = "OP02_087_489";
    
    public static _name: string = "Minotaur";

    public effect: string = "<Double Attack> (This card deals 2 damage.)\r\n[On K.O.] If your Leader has {{Impel Down}} as a type, add 1 DON!! card from your DON!! deck and rest it.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-087_3c113f_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP02_087_489.id
    }
    
    public getType() {
        return OP02_087_489.type
    }
    
    public getImage() {
        return OP02_087_489.image
    }
    
    public getName() {
        return OP02_087_489._name
    }
    
    public getCost(): number {
        return parseInt(OP02_087_489.cost)
    }
}
