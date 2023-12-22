
import Card from "../entities/Card";

export default class OP01_103_102 extends Card {
    public static id: string = "OP01_103_102";
    
    public static _name: string = "Hyogoro";

    public effect: string = "[Activate Main] You may rest this Character: Your Leader or 1 of your Character gains +2000 Power during this turn.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-103_523240_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "4";
    
    public getId() {
        return OP01_103_102.id
    }
    
    public getType() {
        return OP01_103_102.type
    }
    
    public getImage() {
        return OP01_103_102.image
    }
    
    public getName() {
        return OP01_103_102._name
    }
    
    public getCost(): number {
        return parseInt(OP01_103_102.cost)
    }
}
