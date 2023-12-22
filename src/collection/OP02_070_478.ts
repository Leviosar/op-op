
import Card from "../entities/Card";

export default class OP02_070_478 extends Card {
    public static id: string = "OP02_070_478";
    
    public static _name: string = "New Kama Land";

    public effect: string = "[Activate: Main] You may rest this Stage: If your Leader is [Emporio.Ivankov], draw 1 card and trash 1 card from your hand. Then, trash up to 3 cards from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-070_be5852_jp.jpg";
    
    public static type: string = "stage";
    
    public static cost: string = "1";
    
    public getId() {
        return OP02_070_478.id
    }
    
    public getType() {
        return OP02_070_478.type
    }
    
    public getImage() {
        return OP02_070_478.image
    }
    
    public getName() {
        return OP02_070_478._name
    }
    
    public getCost(): number {
        return parseInt(OP02_070_478.cost)
    }
}
