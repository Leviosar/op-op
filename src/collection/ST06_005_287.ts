
import Card, { CardType } from "../entities/Card";

export default class ST06_005_287 extends Card {
    public static id: string = "ST06_005_287";
    
    public static _name: string = "Sengoku";

    public effect: string = "[When Attacking] For this turn, -4 cost for one of your opponent's characters.";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-005_65f240_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public getId() {
        return ST06_005_287.id;
    }
    
    public getType() : CardType {
        return ST06_005_287.type as CardType;
    }
    
    public getImage() {
        return ST06_005_287.image;
    }
    
    public getName() {
        return ST06_005_287._name;
    }
    
    public getCost(): number {
        return parseInt(ST06_005_287.cost);
    }
    
    public getKeywords(): string[] {
        return ST06_005_287.keywords;
    }
}
