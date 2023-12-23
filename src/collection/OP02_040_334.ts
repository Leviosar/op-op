
import Card, { CardType } from "../entities/Card";

export default class OP02_040_334 extends Card {
    public static id: string = "OP02_040_334";
    
    public static _name: string = "Brook";

    public effect: string = "[On Play] Play up to 1 cost 3 or lower {FILM} or {Straw Hat Crew} type Character card from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-040_58dee0_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP02_040_334.id;
    }
    
    public getType() : CardType {
        return OP02_040_334.type as CardType;
    }
    
    public getImage() {
        return OP02_040_334.image;
    }
    
    public getName() {
        return OP02_040_334._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_040_334.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_040_334.keywords;
    }
}
