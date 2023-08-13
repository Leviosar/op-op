
import Card from "../entities/Card";

export default class OP02_030_353 extends Card {
    public static id: string = "OP02_030_353";
    
    public static _name: string = "Kozuki Oden";

    public effect: string = "[Activate: Main] (Once per turn) (3): Switch this Character to active.\r\n[On K.O.] Play up to 1 {Wano Country} type Character card with a cost of 3 from your deck. Then, shuffle your deck.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-030_eb4839_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_030_353.id
    }
    
    public getType() {
        return OP02_030_353.type
    }
    
    public getImage() {
        return OP02_030_353.image
    }
    
    public getName() {
        return OP02_030_353._name
    }
}
