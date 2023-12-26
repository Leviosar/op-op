
import Card, { CardType } from "../entities/Card";

export default class ST07_005_564 extends Card {
    public static id: string = "ST07_005_564";
    
    public static _name: string = "Charlotte Daifuku";

    public effect: string = "[DON!!x1] [When Attacking] You may take 1 card from the top or bottom of your Life Area and put it in your hand: Put up to 1 card from the top of your deck on top of your Life Area.";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-005_313cbe_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Big Mom Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST07_005_564.id;
    }
    
    public getType() : CardType {
        return ST07_005_564.type as CardType;
    }
    
    public getImage() {
        return ST07_005_564.image;
    }
    
    public getName() {
        return ST07_005_564._name;
    }
    
    public getCost(): number {
        return parseInt(ST07_005_564.cost);
    }
    
    public getKeywords(): string[] {
        return ST07_005_564.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST07_005_564.archetypes;
    }
    
    public getPower(): number {
        return ST07_005_564.power;
    }

    public getCounter(): number {
        return ST07_005_564.counter;
    }

    public getLife(): number {
        return ST07_005_564.life;
    }
}
