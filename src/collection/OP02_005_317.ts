
import Card, { CardType } from "../entities/Card";

export default class OP02_005_317 extends Card {
    public static id: string = "OP02_005_317";
    
    public static _name: string = "Curly Dadan";

    public effect: string = "[On Play] Look at 5 cards from the top of your deck; reveal up to 1 Red Character that costs 1 or less and add it to your hand. Then, place the rest at the bottom of your deck in any order.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-005_1c873e_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Mountain Bandit"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_005_317.id;
    }
    
    public getType() : CardType {
        return OP02_005_317.type as CardType;
    }
    
    public getImage() {
        return OP02_005_317.image;
    }
    
    public getName() {
        return OP02_005_317._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_005_317.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_005_317.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_005_317.archetypes;
    }
    
    public getPower(): number {
        return OP02_005_317.power;
    }

    public getCounter(): number {
        return OP02_005_317.counter;
    }

    public getLife(): number {
        return OP02_005_317.life;
    }
}
