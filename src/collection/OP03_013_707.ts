
import Card from "../entities/Card";

export default class OP03_013_707 extends Card {
    public static id: string = "OP03_013_707";
    
    public static _name: string = "Marco";

    public effect: string = "[Your Turn] [On Play] K.O. up to 1 of your opponent's Characters with 3000 Power or less.\r\n[On K.O.] You may trash 1 Event card from your hand: Play this Character from the trash as rested.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-013_70f8a3_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_013_707.id
    }
    
    public getType() {
        return OP03_013_707.type
    }
    
    public getImage() {
        return OP03_013_707.image
    }
    
    public getName() {
        return OP03_013_707._name
    }
}
