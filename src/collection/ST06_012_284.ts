
import Card, { CardType } from "../entities/Card";

export default class ST06_012_284 extends Card {
    public static id: string = "ST06_012_284";
    
    public static _name: string = "Monkey D. Garp";

    public effect: string = "[Activate: Main] Trash 1 card and rest this card: K.O. up to 1 of your opponent's cost 4 or lower Characters.";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-012_304edb_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST06_012_284.id;
    }
    
    public getType() : CardType {
        return ST06_012_284.type as CardType;
    }
    
    public getImage() {
        return ST06_012_284.image;
    }
    
    public getName() {
        return ST06_012_284._name;
    }
    
    public getCost(): number {
        return parseInt(ST06_012_284.cost);
    }
    
    public getKeywords(): string[] {
        return ST06_012_284.keywords;
    }
}
