
import Card from "../entities/Card";

export default class OP03_011_627 extends Card {
    public static id: string = "OP03_011_627";
    
    public static _name: string = "Blamenco";

    public effect: string = "[DON!! x1] [When Attacking] Give up to 1 of your opponent's Characters -2000 Power during this turn.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-011_4b9e53_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP03_011_627.id
    }
    
    public getType() {
        return OP03_011_627.type
    }
    
    public getImage() {
        return OP03_011_627.image
    }
    
    public getName() {
        return OP03_011_627._name
    }
    
    public getCost(): number {
        return parseInt(OP03_011_627.cost)
    }
}
