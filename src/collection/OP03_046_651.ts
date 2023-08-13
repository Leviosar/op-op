
import Card from "../entities/Card";

export default class OP03_046_651 extends Card {
    public static id: string = "OP03_046_651";
    
    public static _name: string = "Carne";

    public effect: string = "<Blocker>\r\n[Opponent's Turn] If your deck has 20 or less cards, this Character gains +3000 Power.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-046_10a6bb_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_046_651.id
    }
    
    public getType() {
        return OP03_046_651.type
    }
    
    public getImage() {
        return OP03_046_651.image
    }
    
    public getName() {
        return OP03_046_651._name
    }
}
