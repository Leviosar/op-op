
import Card, { CardType } from "../entities/Card";

export default class OP03_053_657 extends Card {
    public static id: string = "OP03_053_657";
    
    public static _name: string = "Yosaku & Johnny";

    public effect: string = "[DON!!x1] If your deck has 20 or less cards, this Character gains +2000 Power.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-053_2fb530_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP03_053_657.id;
    }
    
    public getType() : CardType {
        return OP03_053_657.type as CardType;
    }
    
    public getImage() {
        return OP03_053_657.image;
    }
    
    public getName() {
        return OP03_053_657._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_053_657.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_053_657.keywords;
    }
}
