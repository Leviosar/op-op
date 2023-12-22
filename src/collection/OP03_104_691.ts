
import Card from "../entities/Card";

export default class OP03_104_691 extends Card {
    public static id: string = "OP03_104_691";
    
    public static _name: string = "Sharley";

    public effect: string = "<Blocker>\r\n[On Play] Look at the up to 1 card on top of your or your opponent's Life, and place it at the top or bottom of its owner's Life.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-104_bc6e66_jp.jpg";
    
    public static type: string = "char";
    
    public static cost: string = "3";
    
    public getId() {
        return OP03_104_691.id
    }
    
    public getType() {
        return OP03_104_691.type
    }
    
    public getImage() {
        return OP03_104_691.image
    }
    
    public getName() {
        return OP03_104_691._name
    }
    
    public getCost(): number {
        return parseInt(OP03_104_691.cost)
    }
}
