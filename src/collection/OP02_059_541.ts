
import Card, { CardType } from "../entities/Card";

export default class OP02_059_541 extends Card {
    public static id: string = "OP02_059_541";
    
    public static _name: string = "Boa Hancock";

    public effect: string = "[When Attacking] Draw 1 card and trash 1 card from your hand. Then, trash up to 3 cards from your hand.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-059_4ef953_jp.png";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Impel Down","The Seven Warlords of the Sea","Kuja"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_059_541.id;
    }
    
    public getType() : CardType {
        return OP02_059_541.type as CardType;
    }
    
    public getImage() {
        return OP02_059_541.image;
    }
    
    public getName() {
        return OP02_059_541._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_059_541.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_059_541.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_059_541.archetypes;
    }
    
    public getPower(): number {
        return OP02_059_541.power;
    }

    public getCounter(): number {
        return OP02_059_541.counter;
    }

    public getLife(): number {
        return OP02_059_541.life;
    }
}
