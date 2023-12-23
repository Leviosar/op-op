
import Card, { CardType } from "../entities/Card";

export default class OP02_118_509 extends Card {
    public static id: string = "OP02_118_509";
    
    public static _name: string = "Yasakani Sacred Jewel";

    public effect: string = "[Counter] You may trash 1 card from your hand: Select up to 1 of your Characters. The selected Character cannot be K.O.'d during this battle.\r\n[Trigger] K.O. up to 1 of your opponent's Stages with a cost of 3 or less.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-118_c830c4_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP02_118_509.id;
    }
    
    public getType() : CardType {
        return OP02_118_509.type as CardType;
    }
    
    public getImage() {
        return OP02_118_509.image;
    }
    
    public getName() {
        return OP02_118_509._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_118_509.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_118_509.keywords;
    }
}
