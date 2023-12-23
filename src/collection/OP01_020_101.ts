
import Card, { CardType } from "../entities/Card";

export default class OP01_020_101 extends Card {
    public static id: string = "OP01_020_101";
    
    public static _name: string = "Hyogoro";

    public effect: string = "[Activate Main] You may rest this Character: Your Leader or 1 of your Character gains +2000 Power during this turn.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-020_be7d36_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public getId() {
        return OP01_020_101.id;
    }
    
    public getType() : CardType {
        return OP01_020_101.type as CardType;
    }
    
    public getImage() {
        return OP01_020_101.image;
    }
    
    public getName() {
        return OP01_020_101._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_020_101.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_020_101.keywords;
    }
}
