
import Card from "../entities/Card";

export default class OP03_050_654 extends Card {
    public static id: string = "OP03_050_654";
    
    public static _name: string = "Boodle";

    public effect: string = "<Blocker>\r\n[On K.O] You may trash the top card of your deck.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP03-050_60c4bc_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP03_050_654.id
    }
    
    public getType() {
        return OP03_050_654.type
    }
    
    public getImage() {
        return OP03_050_654.image
    }
    
    public getName() {
        return OP03_050_654._name
    }
}
