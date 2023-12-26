
import Card, { CardType } from "../entities/Card";

export default class OP04_110_871 extends Card {
    public static id: string = "OP04_110_871";
    
    public static _name: string = "Pound";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n[On K.O.] Add up to 1 of your opponent's Characters with a cost of 3 or less to the top or bottom of your opponent's Life cards face-up.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-110_085485_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetype: string[] = ["Whole Cake Island"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_110_871.id;
    }
    
    public getType() : CardType {
        return OP04_110_871.type as CardType;
    }
    
    public getImage() {
        return OP04_110_871.image;
    }
    
    public getName() {
        return OP04_110_871._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_110_871.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_110_871.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_110_871.archetypes;
    }
    
    public getPower(): number {
        return OP04_110_871.power;
    }

    public getCounter(): number {
        return OP04_110_871.counter;
    }

    public getLife(): number {
        return OP04_110_871.life;
    }
}
