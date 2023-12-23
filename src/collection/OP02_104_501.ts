
import Card, { CardType } from "../entities/Card";

export default class OP02_104_501 extends Card {
    public static id: string = "OP02_104_501";
    
    public static _name: string = "Sentomaru";

    public effect: string = "[Trigger] Play this card.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-104_68a04b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP02_104_501.id;
    }
    
    public getType() : CardType {
        return OP02_104_501.type as CardType;
    }
    
    public getImage() {
        return OP02_104_501.image;
    }
    
    public getName() {
        return OP02_104_501._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_104_501.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_104_501.keywords;
    }
}
