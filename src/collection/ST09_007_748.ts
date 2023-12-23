
import Card, { CardType } from "../entities/Card";

export default class ST09_007_748 extends Card {
    public static id: string = "ST09_007_748";
    
    public static _name: string = "Shinobu";

    public effect: string = "<Blocker>\r\n[On Block] You may add the top or bottom card of your Life area to your hand: This Character gains +4000 Power during this battle.";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST09-007_1ef7ba_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Blocker"];
    
    public getId() {
        return ST09_007_748.id;
    }
    
    public getType() : CardType {
        return ST09_007_748.type as CardType;
    }
    
    public getImage() {
        return ST09_007_748.image;
    }
    
    public getName() {
        return ST09_007_748._name;
    }
    
    public getCost(): number {
        return parseInt(ST09_007_748.cost);
    }
    
    public getKeywords(): string[] {
        return ST09_007_748.keywords;
    }
}
