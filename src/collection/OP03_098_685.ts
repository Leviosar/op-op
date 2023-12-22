
import Card from "../entities/Card";

export default class OP03_098_685 extends Card {
    public static id: string = "OP03_098_685";
    
    public static _name: string = "Enies Lobby";

    public effect: string = "[Activate: Main] You may rest this Stage: If your Leader has {CP} in its types, give up to 1 of your opponent's Characters -2 cost during this turn.\r\n[Trigger] Play this card.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-098_57f7ac_jp.jpg";
    
    public static type: string = "stage";
    
    public static cost: string = "2";
    
    public getId() {
        return OP03_098_685.id
    }
    
    public getType() {
        return OP03_098_685.type
    }
    
    public getImage() {
        return OP03_098_685.image
    }
    
    public getName() {
        return OP03_098_685._name
    }
    
    public getCost(): number {
        return parseInt(OP03_098_685.cost)
    }
}
