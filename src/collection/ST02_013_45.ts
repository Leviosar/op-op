
import Card, { CardType } from "../entities/Card";

export default class ST02_013_45 extends Card {
    public static id: string = "ST02_013_45";
    
    public static _name: string = "Eustass \"Captain\" Kid";

    public effect: string = "<Blocker>\r\n[Don!! x1] [When your turn ends] Switch this Character to Active";
    
    public source: string = "Worst Generation [ST-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST02-013_4346d0_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = ["Blocker"];
    
    public getId() {
        return ST02_013_45.id;
    }
    
    public getType() : CardType {
        return ST02_013_45.type as CardType;
    }
    
    public getImage() {
        return ST02_013_45.image;
    }
    
    public getName() {
        return ST02_013_45._name;
    }
    
    public getCost(): number {
        return parseInt(ST02_013_45.cost);
    }
    
    public getKeywords(): string[] {
        return ST02_013_45.keywords;
    }
}
