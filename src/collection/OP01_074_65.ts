
import Card from "../entities/Card";

export default class OP01_074_65 extends Card {
    public static id: string = "OP01_074_65";
    
    public static _name: string = "Bartholomew Kuma";

    public effect: string = "[Blocker] (During your opponent's attack, you may rest this card to make it the target of the attack).\r\n[On K.O.] Play up to one cost 4 or lower [Pacifista] from your hand.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-074_9daffc_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP01_074_65.id
    }
    
    public getType() {
        return OP01_074_65.type
    }
    
    public getImage() {
        return OP01_074_65.image
    }
    
    public getName() {
        return OP01_074_65._name
    }
    
    public getCost(): number {
        return parseInt(OP01_074_65.cost)
    }
}
