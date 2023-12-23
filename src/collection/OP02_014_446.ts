
import Card, { CardType } from "../entities/Card";

export default class OP02_014_446 extends Card {
    public static id: string = "OP02_014_446";
    
    public static _name: string = "Whitey Bay";

    public effect: string = "[DON!! x1] This Character can also attack your opponent's active Characters.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-014_7c97a8_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP02_014_446.id;
    }
    
    public getType() : CardType {
        return OP02_014_446.type as CardType;
    }
    
    public getImage() {
        return OP02_014_446.image;
    }
    
    public getName() {
        return OP02_014_446._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_014_446.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_014_446.keywords;
    }
}
