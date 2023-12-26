
import Card, { CardType } from "../entities/Card";

export default class OP04_046_770 extends Card {
    public static id: string = "OP04_046_770";
    
    public static _name: string = "Queen";

    public effect: string = "[On Play] If your Leader has the {Animal Kingdom Pirates} type, look at the top 7 cards of your deck, reveal up to 2 total [Plague Rounds] or [Ice Oni] and add them to your hand. Then, place the rest at the bottom of your deck in any order.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-046_d01e03_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Animal Kingdom Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_046_770.id;
    }
    
    public getType() : CardType {
        return OP04_046_770.type as CardType;
    }
    
    public getImage() {
        return OP04_046_770.image;
    }
    
    public getName() {
        return OP04_046_770._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_046_770.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_046_770.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_046_770.archetypes;
    }
    
    public getPower(): number {
        return OP04_046_770.power;
    }

    public getCounter(): number {
        return OP04_046_770.counter;
    }

    public getLife(): number {
        return OP04_046_770.life;
    }
}
