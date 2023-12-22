
import Card from "../entities/Card";

export default class OP03_075_595 extends Card {
    public static id: string = "OP03_075_595";
    
    public static _name: string = "Galley-La Company";

    public effect: string = "[Activate Main] You may Rest this Stage: If your Leader is [Iceberg], add 1 DON!! card from your DON!! deck to your Cost Area in Rest.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-075_de9bec_jp.jpg";
    
    public static type: string = "stage";
    
    public static cost: string = "3";
    
    public getId() {
        return OP03_075_595.id
    }
    
    public getType() {
        return OP03_075_595.type
    }
    
    public getImage() {
        return OP03_075_595.image
    }
    
    public getName() {
        return OP03_075_595._name
    }
    
    public getCost(): number {
        return parseInt(OP03_075_595.cost)
    }
}
