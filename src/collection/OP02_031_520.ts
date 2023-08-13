
import Card from "../entities/Card";

export default class OP02_031_520 extends Card {
    public static id: string = "OP02_031_520";
    
    public static _name: string = "Kozuki Toki";

    public effect: string = "If you control a [Kozuki Oden] Character, this Character gains <Blocker>";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-031_be8e5f_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_031_520.id
    }
    
    public getType() {
        return OP02_031_520.type
    }
    
    public getImage() {
        return OP02_031_520.image
    }
    
    public getName() {
        return OP02_031_520._name
    }
}
