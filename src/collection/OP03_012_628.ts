
import Card from "../entities/Card";

export default class OP03_012_628 extends Card {
    public static id: string = "OP03_012_628";
    
    public static _name: string = "Marshall D. Teach";

    public effect: string = "[When Attacking] You may trash 1 Red Character with 4000 Power or more: Draw 1 card. Then, this Character gains +1000 Power during this battle.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-012_618ce0_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_012_628.id
    }
    
    public getType() {
        return OP03_012_628.type
    }
    
    public getImage() {
        return OP03_012_628.image
    }
    
    public getName() {
        return OP03_012_628._name
    }
}
