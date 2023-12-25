
import Card, { CardType } from "../entities/Card";

export default class OP02_109_503 extends Card {
    public static id: string = "OP02_109_503";
    
    public static _name: string = "Tsuru";

    public effect: string = "[On Play] Give up to 1 of your opponent's Characters −2 cost during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-109_4db22b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_109_503.id;
    }
    
    public getType() : CardType {
        return OP02_109_503.type as CardType;
    }
    
    public getImage() {
        return OP02_109_503.image;
    }
    
    public getName() {
        return OP02_109_503._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_109_503.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_109_503.keywords;
    }
    
    public getPower(): number {
        return OP02_109_503.power;
    }

    public getCounter(): number {
        return OP02_109_503.counter;
    }

    public getLife(): number {
        return OP02_109_503.life;
    }
}
