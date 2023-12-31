
import Card, { CardType } from "../entities/Card";

export default class ST07_004_592 extends Card {
    public static id: string = "ST07_004_592";
    
    public static _name: string = "Charlotte Snack";

    public effect: string = "[DON!!x1] [When Attacking] You may add the top or bottom card of your Life area to your hand: This Character gains <Banish> and 1000 power for this battle.";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-004_5443e0_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = ["Banish"];
    
    public static archetypes: string[] = ["Big Mom Pirates"];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST07_004_592.id;
    }
    
    public getType() : CardType {
        return ST07_004_592.type as CardType;
    }
    
    public getImage() {
        return ST07_004_592.image;
    }
    
    public getName() {
        return ST07_004_592._name;
    }
    
    public getCost(): number {
        return parseInt(ST07_004_592.cost);
    }
    
    public getKeywords(): string[] {
        return ST07_004_592.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST07_004_592.archetypes;
    }
    
    public getPower(): number {
        return ST07_004_592.power;
    }

    public getCounter(): number {
        return ST07_004_592.counter;
    }

    public getLife(): number {
        return ST07_004_592.life;
    }
}
