
import Card, { CardType } from "../entities/Card";

export default class OP04_095_859 extends Card {
    public static id: string = "OP04_095_859";
    
    public static _name: string = "Barrier!!";

    public effect: string = "[Counter] Up to 1 of your Leader or Character cards gains +2000 power during this battle. Then, if you have 15 or more cards in your trash, that card gains an additional +2000 power during this battle.\r\n[Trigger] Draw 2 cards and trash 1 card from your hand.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-095_4db02d_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Dressrosa","Barto Club"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_095_859.id;
    }
    
    public getType() : CardType {
        return OP04_095_859.type as CardType;
    }
    
    public getImage() {
        return OP04_095_859.image;
    }
    
    public getName() {
        return OP04_095_859._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_095_859.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_095_859.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_095_859.archetypes;
    }
    
    public getPower(): number {
        return OP04_095_859.power;
    }

    public getCounter(): number {
        return OP04_095_859.counter;
    }

    public getLife(): number {
        return OP04_095_859.life;
    }
}
