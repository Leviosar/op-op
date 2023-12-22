
import Card from "../entities/Card";

export default class OP01_073_218 extends Card {
    public static id: string = "OP01_073_218";
    
    public static _name: string = "Donquixote Doflamingo";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n[On Play] Look at 5 cards from the top of your deck and place them at the top or bottom of the deck in any order.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-073_685fdd_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP01_073_218.id
    }
    
    public getType() {
        return OP01_073_218.type
    }
    
    public getImage() {
        return OP01_073_218.image
    }
    
    public getName() {
        return OP01_073_218._name
    }
    
    public getCost(): number {
        return parseInt(OP01_073_218.cost)
    }
}
