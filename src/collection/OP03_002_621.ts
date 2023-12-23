
import Card, { CardType } from "../entities/Card";

export default class OP03_002_621 extends Card {
    public static id: string = "OP03_002_621";
    
    public static _name: string = "Adio";

    public effect: string = "[DON!!x1] [When Attacking] During this battle, your opponent can not activate <Blocker> of Characters with 2000 power or less.";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-002_98d6e3_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public getId() {
        return OP03_002_621.id;
    }
    
    public getType() : CardType {
        return OP03_002_621.type as CardType;
    }
    
    public getImage() {
        return OP03_002_621.image;
    }
    
    public getName() {
        return OP03_002_621._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_002_621.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_002_621.keywords;
    }
}
