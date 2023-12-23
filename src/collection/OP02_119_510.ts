
import Card, { CardType } from "../entities/Card";

export default class OP02_119_510 extends Card {
    public static id: string = "OP02_119_510";
    
    public static _name: string = "Meteor Volcano";

    public effect: string = "[Main] K.O. up to 1 of your opponent's Characters with a cost of 1 or less.\r\n[Trigger] Draw 2 cards and trash 1 card from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-119_c25afc_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP02_119_510.id;
    }
    
    public getType() : CardType {
        return OP02_119_510.type as CardType;
    }
    
    public getImage() {
        return OP02_119_510.image;
    }
    
    public getName() {
        return OP02_119_510._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_119_510.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_119_510.keywords;
    }
}
