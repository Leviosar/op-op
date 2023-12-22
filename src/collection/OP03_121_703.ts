
import Card from "../entities/Card";

export default class OP03_121_703 extends Card {
    public static id: string = "OP03_121_703";
    
    public static _name: string = "Thunder Bolt";

    public effect: string = "[Main] You may trash 1 card from the top of your Life: K.O. up to 1 of your opponent’s Characters with a cost 5 or less.\r\n[Trigger] K.O. up to 1 of your opponent’s Characters with a cost 5 or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-121_4c830b_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "2";
    
    public getId() {
        return OP03_121_703.id
    }
    
    public getType() {
        return OP03_121_703.type
    }
    
    public getImage() {
        return OP03_121_703.image
    }
    
    public getName() {
        return OP03_121_703._name
    }
    
    public getCost(): number {
        return parseInt(OP03_121_703.cost)
    }
}
