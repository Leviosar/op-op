
import Card from "../entities/Card";

export default class OP03_054_658 extends Card {
    public static id: string = "OP03_054_658";
    
    public static _name: string = "Usopp's Rubber Band of Doom!";

    public effect: string = "[Counter] Up to 1 of your Leader or Characters gains +2000 Power during this battle. Then you may trash the top card of your deck.\r\n\r\n[Trigger] Draw 1 Card. You may trash the top card of your deck.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-054_c255c8_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "1";
    
    public getId() {
        return OP03_054_658.id
    }
    
    public getType() {
        return OP03_054_658.type
    }
    
    public getImage() {
        return OP03_054_658.image
    }
    
    public getName() {
        return OP03_054_658._name
    }
    
    public getCost(): number {
        return parseInt(OP03_054_658.cost)
    }
}
