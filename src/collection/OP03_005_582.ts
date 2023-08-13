
import Card from "../entities/Card";

export default class OP03_005_582 extends Card {
    public static id: string = "OP03_005_582";
    
    public static _name: string = "Thatch";

    public effect: string = "[Activate Main] (Once per turn) This Character gains +2000 power for the turn. Then, place this Character in the trash at the end of the turn.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-005_0b83b2_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_005_582.id
    }
    
    public getType() {
        return OP03_005_582.type
    }
    
    public getImage() {
        return OP03_005_582.image
    }
    
    public getName() {
        return OP03_005_582._name
    }
}
