
import Card, { CardType } from "../entities/Card";

export default class OP02_010_444 extends Card {
    public static id: string = "OP02_010_444";
    
    public static _name: string = "Dogura";

    public effect: string = "[Activate: Main] You may rest this Character: Play up to 1 red Character other than [Dogura] with a cost of 1 from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-010_784fcd_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP02_010_444.id;
    }
    
    public getType() : CardType {
        return OP02_010_444.type as CardType;
    }
    
    public getImage() {
        return OP02_010_444.image;
    }
    
    public getName() {
        return OP02_010_444._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_010_444.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_010_444.keywords;
    }
}
