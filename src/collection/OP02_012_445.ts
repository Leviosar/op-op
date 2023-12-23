
import Card, { CardType } from "../entities/Card";

export default class OP02_012_445 extends Card {
    public static id: string = "OP02_012_445";
    
    public static _name: string = "Blenheim";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-012_21181d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = ["Blocker"];
    
    public getId() {
        return OP02_012_445.id;
    }
    
    public getType() : CardType {
        return OP02_012_445.type as CardType;
    }
    
    public getImage() {
        return OP02_012_445.image;
    }
    
    public getName() {
        return OP02_012_445._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_012_445.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_012_445.keywords;
    }
}
