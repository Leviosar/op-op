
import Card, { CardType } from "../entities/Card";

export default class OP03_025_583 extends Card {
    public static id: string = "OP03_025_583";
    
    public static _name: string = "Krieg";

    public effect: string = "[On Play] You may trash 1 card from your hand: K.O. up to 2 of your opponent's rested Characters that cost 4 or less.\r\n[DON!!x1] This Character gains <Double Attack>";
    
    public source: string = "Pillars of Strength [OP-03]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP03-025_6605b2_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = ["Double Attack"];
    
    public static archetype: string[] = ["East Blue","Krieg Pirates"];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP03_025_583.id;
    }
    
    public getType() : CardType {
        return OP03_025_583.type as CardType;
    }
    
    public getImage() {
        return OP03_025_583.image;
    }
    
    public getName() {
        return OP03_025_583._name;
    }
    
    public getCost(): number {
        return parseInt(OP03_025_583.cost);
    }
    
    public getKeywords(): string[] {
        return OP03_025_583.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP03_025_583.archetypes;
    }
    
    public getPower(): number {
        return OP03_025_583.power;
    }

    public getCounter(): number {
        return OP03_025_583.counter;
    }

    public getLife(): number {
        return OP03_025_583.life;
    }
}
