
import Card from "../entities/Card";

export default class OP03_080_613 extends Card {
    public static id: string = "OP03_080_613";
    
    public static _name: string = "Kaku";

    public effect: string = "[On Play] You may return 2 cards with a type including \"CP\" from your trash to the bottom of your deck in any order: K.O. up to 1 of your opponent's Characters with a cost of 3 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-080_40ff9a_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_080_613.id
    }
    
    public getType() {
        return OP03_080_613.type
    }
    
    public getImage() {
        return OP03_080_613.image
    }
    
    public getName() {
        return OP03_080_613._name
    }
}
