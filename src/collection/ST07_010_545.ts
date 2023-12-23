
import Card, { CardType } from "../entities/Card";

export default class ST07_010_545 extends Card {
    public static id: string = "ST07_010_545";
    
    public static _name: string = "Charlotte Linlin";

    public effect: string = "[On Play] Your opponent chooses 1 from below.\r\n- Trash 1 Life card from the top card of your opponent's Life area.\r\n- Put 1 card from the top of your deck on top of your Life area.";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-010_e63399_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST07_010_545.id;
    }
    
    public getType() : CardType {
        return ST07_010_545.type as CardType;
    }
    
    public getImage() {
        return ST07_010_545.image;
    }
    
    public getName() {
        return ST07_010_545._name;
    }
    
    public getCost(): number {
        return parseInt(ST07_010_545.cost);
    }
    
    public getKeywords(): string[] {
        return ST07_010_545.keywords;
    }
}
