
import Card, { CardType } from "../entities/Card";

export default class OP04_102_864 extends Card {
    public static id: string = "OP04_102_864";
    
    public static _name: string = "Kin'emon";

    public effect: string = "[Activate: Main] [Once Per Turn] ➀ (You may rest the specified number of DON!! cards in your cost area.) You may add 1 card from the top or bottom of your Life cards to your hand: Set this Character as active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-102_e52100_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Land of Wano"];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_102_864.id;
    }
    
    public getType() : CardType {
        return OP04_102_864.type as CardType;
    }
    
    public getImage() {
        return OP04_102_864.image;
    }
    
    public getName() {
        return OP04_102_864._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_102_864.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_102_864.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_102_864.archetypes;
    }
    
    public getPower(): number {
        return OP04_102_864.power;
    }

    public getCounter(): number {
        return OP04_102_864.counter;
    }

    public getLife(): number {
        return OP04_102_864.life;
    }
}
