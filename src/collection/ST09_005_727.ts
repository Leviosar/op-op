
import Card, { CardType } from "../entities/Card";

export default class ST09_005_727 extends Card {
    public static id: string = "ST09_005_727";
    
    public static _name: string = "Kozuki Oden";

    public effect: string = "[DON!! x1] This character gains Double Attack. (This card deals 2 damage.)\r\n[On KO] You may trash 2 cards from your hand: Add up to 1 card from the top of your deck to the top of your Life Area.";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST09-006_ad547f_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST09_005_727.id;
    }
    
    public getType() : CardType {
        return ST09_005_727.type as CardType;
    }
    
    public getImage() {
        return ST09_005_727.image;
    }
    
    public getName() {
        return ST09_005_727._name;
    }
    
    public getCost(): number {
        return parseInt(ST09_005_727.cost);
    }
    
    public getKeywords(): string[] {
        return ST09_005_727.keywords;
    }
}
