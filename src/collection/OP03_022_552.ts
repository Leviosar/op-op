
import Card from "../entities/Card";

export default class OP03_022_552 extends Card {
    public static id: string = "OP03_022_552";
    
    public static _name: string = "Arlong";

    public effect: string = "[DON!!x2] [When Attacking] (1) (You may rest the designated number for DON!! in your Cost Area): Play up to 1 Character card with a cost of 4 or less with <Trigger> from your hand.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-022_345be0_jp.jpg";
    
    public static type = "leader";
    
    public getId() {
        return OP03_022_552.id
    }
    
    public getType() {
        return OP03_022_552.type
    }
    
    public getImage() {
        return OP03_022_552.image
    }
    
    public getName() {
        return OP03_022_552._name
    }
}
