
import Card from "../entities/Card";

export default class OP03_019_633 extends Card {
    public static id: string = "OP03_019_633";
    
    public static _name: string = "Fiery Doll";

    public effect: string = "[Main] Your Leader gains +4000 Power during this turn.\r\n[Trigger] Give up to 1 of your opponent's Leader or Characters -10000 Power during this turn.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-019_562531_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "2";
    
    public getId() {
        return OP03_019_633.id
    }
    
    public getType() {
        return OP03_019_633.type
    }
    
    public getImage() {
        return OP03_019_633.image
    }
    
    public getName() {
        return OP03_019_633._name
    }
    
    public getCost(): number {
        return parseInt(OP03_019_633.cost)
    }
}
