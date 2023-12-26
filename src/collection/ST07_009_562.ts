
import Card, { CardType } from "../entities/Card";

export default class ST07_009_562 extends Card {
    public static id: string = "ST07_009_562";
    
    public static _name: string = "Charlotte Mont D'Or";

    public effect: string = "[Activate:Main] You may rest this Character and take the card at the top or bottom of your Life Area to your hand: K.O. up to 1 of your opponent's Characters that costs 3 or less\r\n\r\n[Trigger] You may trash 1 card from your hand: Play this card.";
    
    public source: string = "Big Mom Pirates [ST-07]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST07-009_48e209_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Big Mom Pirates"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST07_009_562.id;
    }
    
    public getType() : CardType {
        return ST07_009_562.type as CardType;
    }
    
    public getImage() {
        return ST07_009_562.image;
    }
    
    public getName() {
        return ST07_009_562._name;
    }
    
    public getCost(): number {
        return parseInt(ST07_009_562.cost);
    }
    
    public getKeywords(): string[] {
        return ST07_009_562.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST07_009_562.archetypes;
    }
    
    public getPower(): number {
        return ST07_009_562.power;
    }

    public getCounter(): number {
        return ST07_009_562.counter;
    }

    public getLife(): number {
        return ST07_009_562.life;
    }
}
