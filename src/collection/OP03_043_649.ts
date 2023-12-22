
import Card from "../entities/Card";

export default class OP03_043_649 extends Card {
    public static id: string = "OP03_043_649";
    
    public static _name: string = "Gaimon";

    public effect: string = "When you deal damage to your opponent's Life, you may trash the top 3 cards of your deck. If you do, place this Character in the trash.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-043_e2ab85_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "2";
    
    public getId() {
        return OP03_043_649.id
    }
    
    public getType() {
        return OP03_043_649.type
    }
    
    public getImage() {
        return OP03_043_649.image
    }
    
    public getName() {
        return OP03_043_649._name
    }
    
    public getCost(): number {
        return parseInt(OP03_043_649.cost)
    }
}
