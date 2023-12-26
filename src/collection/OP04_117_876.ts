
import Card, { CardType } from "../entities/Card";

export default class OP04_117_876 extends Card {
    public static id: string = "OP04_117_876";
    
    public static _name: string = "Heavenly Fire";

    public effect: string = "[Main] Add up to 1 of your opponent's Characters with a cost of 3 or less to the top or bottom of your opponent's Life cards face-up.\r\n[Trigger] You may add 1 card from the top or bottom of your Life cards to your hand: Add up to 1 card from your hand to the top of your Life cards.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-117_ba0405_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["The Four Emperors","Big Mom Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_117_876.id;
    }
    
    public getType() : CardType {
        return OP04_117_876.type as CardType;
    }
    
    public getImage() {
        return OP04_117_876.image;
    }
    
    public getName() {
        return OP04_117_876._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_117_876.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_117_876.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_117_876.archetypes;
    }
    
    public getPower(): number {
        return OP04_117_876.power;
    }

    public getCounter(): number {
        return OP04_117_876.counter;
    }

    public getLife(): number {
        return OP04_117_876.life;
    }
}
