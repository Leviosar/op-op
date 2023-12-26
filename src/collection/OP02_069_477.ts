
import Card, { CardType } from "../entities/Card";

export default class OP02_069_477 extends Card {
    public static id: string = "OP02_069_477";
    
    public static _name: string = "DEATH WINK";

    public effect: string = "[Counter] Up to 1 of your Leader or Character cards gains +6000 power during this battle. Then, draw cards so that you have 2 cards in your hand.\r\n[Trigger] Return up to 1 Character with a cost of 7 or less to the owner's hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-069_2f2c94_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Impel Down","Revolutionary Army"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_069_477.id;
    }
    
    public getType() : CardType {
        return OP02_069_477.type as CardType;
    }
    
    public getImage() {
        return OP02_069_477.image;
    }
    
    public getName() {
        return OP02_069_477._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_069_477.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_069_477.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_069_477.archetypes;
    }
    
    public getPower(): number {
        return OP02_069_477.power;
    }

    public getCounter(): number {
        return OP02_069_477.counter;
    }

    public getLife(): number {
        return OP02_069_477.life;
    }
}
