
import Card from "../entities/Card";

export default class OP03_064_597 extends Card {
    public static id: string = "OP03_064_597";
    
    public static _name: string = "Tilestone";

    public effect: string = "[On K.O.] If your Leader has the {Galley-La Company} type, add 1 DON!! card from your DON!! deck and rest it.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-064_4902ad_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "5";
    
    public getId() {
        return OP03_064_597.id
    }
    
    public getType() {
        return OP03_064_597.type
    }
    
    public getImage() {
        return OP03_064_597.image
    }
    
    public getName() {
        return OP03_064_597._name
    }
    
    public getCost(): number {
        return parseInt(OP03_064_597.cost)
    }
}
