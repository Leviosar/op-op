
import Card from "../entities/Card";

export default class OP02_027_326 extends Card {
    public static id: string = "OP02_027_326";
    
    public static _name: string = "Inuarashi";

    public effect: string = "If all your DON!! are rested, this Character can't leave the field due to your opponent's effects.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-027_1be48d_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP02_027_326.id
    }
    
    public getType() {
        return OP02_027_326.type
    }
    
    public getImage() {
        return OP02_027_326.image
    }
    
    public getName() {
        return OP02_027_326._name
    }
    
    public getCost(): number {
        return parseInt(OP02_027_326.cost)
    }
}
