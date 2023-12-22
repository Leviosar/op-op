
import Card from "../entities/Card";

export default class OP02_066_475 extends Card {
    public static id: string = "OP02_066_475";
    
    public static _name: string = "Impel Down All Stars";

    public effect: string = "[Main] You may trash 2 cards from your hand: If your Leader has the {Impel Down} type, draw up to 2 cards.\r\n[Trigger] Draw 2 cards.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-066_fc1ac8_jp.jpg";
    
    public static type: string = "event";
    
    public static cost: string = "1";
    
    public getId() {
        return OP02_066_475.id
    }
    
    public getType() {
        return OP02_066_475.type
    }
    
    public getImage() {
        return OP02_066_475.image
    }
    
    public getName() {
        return OP02_066_475._name
    }
    
    public getCost(): number {
        return parseInt(OP02_066_475.cost)
    }
}
