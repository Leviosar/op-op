
import Card, { CardType } from "../entities/Card";

export default class OP04_047_825 extends Card {
    public static id: string = "OP04_047_825";
    
    public static _name: string = "Ice Oni";

    public effect: string = "[Your Turn] At the end of a battle in which this Character battles your opponent's Character with a cost of 5 or less, place the opponent's Character you battled with at the bottom of the owner's deck.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-047_557e94_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "8";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_047_825.id;
    }
    
    public getType() : CardType {
        return OP04_047_825.type as CardType;
    }
    
    public getImage() {
        return OP04_047_825.image;
    }
    
    public getName() {
        return OP04_047_825._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_047_825.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_047_825.keywords;
    }
    
    public getPower(): number {
        return OP04_047_825.power;
    }

    public getCounter(): number {
        return OP04_047_825.counter;
    }

    public getLife(): number {
        return OP04_047_825.life;
    }
}
