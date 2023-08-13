
import Card from "../entities/Card";

export default class OP02_050_356 extends Card {
    public static id: string = "OP02_050_356";
    
    public static _name: string = "Inazuma";

    public effect: string = "If you have 1 or less cards in your hand, this Character gains +2000 Power.\r\n<Blocker>";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-050_2ad9de_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_050_356.id
    }
    
    public getType() {
        return OP02_050_356.type
    }
    
    public getImage() {
        return OP02_050_356.image
    }
    
    public getName() {
        return OP02_050_356._name
    }
}
