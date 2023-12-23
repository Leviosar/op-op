
import Card, { CardType } from "../entities/Card";

export default class ST08_007_724 extends Card {
    public static id: string = "ST08_007_724";
    
    public static _name: string = "Nefertari Vivi";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n\r\n[Trigger] Play this card.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-007_3f9885_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Blocker"];
    
    public getId() {
        return ST08_007_724.id;
    }
    
    public getType() : CardType {
        return ST08_007_724.type as CardType;
    }
    
    public getImage() {
        return ST08_007_724.image;
    }
    
    public getName() {
        return ST08_007_724._name;
    }
    
    public getCost(): number {
        return parseInt(ST08_007_724.cost);
    }
    
    public getKeywords(): string[] {
        return ST08_007_724.keywords;
    }
}
