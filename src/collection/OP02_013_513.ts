
import Card from "../entities/Card";

export default class OP02_013_513 extends Card {
    public static id: string = "OP02_013_513";
    
    public static _name: string = "Portgas. D. Ace";

    public effect: string = "[On Play] Give up to 2 of your opponent's Characters -3000 Power during this turn. Then, if your Leader has [Whitebeard Pirates] in its types, this Character gains <Rush> during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image = "https://onepiece-cardgame.dev/images/cards/OP02-013_11eb73_jp.jpg";
    
    public static type = "char";
    
    public getId() {
        return OP02_013_513.id
    }
    
    public getType() {
        return OP02_013_513.type
    }
    
    public getImage() {
        return OP02_013_513.image
    }
    
    public getName() {
        return OP02_013_513._name
    }
}
