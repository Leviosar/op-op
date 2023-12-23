
import Card, { CardType } from "../entities/Card";

export default class OP02_018_314 extends Card {
    public static id: string = "OP02_018_314";
    
    public static _name: string = "Marco";

    public effect: string = "<Blocker>\r\n[On K.O.] You may trash 1 card from hand with {Whitebeard Pirates} in one of its types: If you have 2 or less Life, play this Character card from your Trash as rested.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-018_22dd66_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public getId() {
        return OP02_018_314.id;
    }
    
    public getType() : CardType {
        return OP02_018_314.type as CardType;
    }
    
    public getImage() {
        return OP02_018_314.image;
    }
    
    public getName() {
        return OP02_018_314._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_018_314.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_018_314.keywords;
    }
}
