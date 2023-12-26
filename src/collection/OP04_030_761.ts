
import Card, { CardType } from "../entities/Card";

export default class OP04_030_761 extends Card {
    public static id: string = "OP04_030_761";
    
    public static _name: string = "Trebol";

    public effect: string = "[On Play] K.O. up to 1 of your opponent's rested Characters with a cost of 5 or less.\r\n[When Opponent Attacks] (2): Set up to 1 of your opponent's Characters with a cost of 4 or less as rested.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-030_41960b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "6";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Donquixote Pirates"];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_030_761.id;
    }
    
    public getType() : CardType {
        return OP04_030_761.type as CardType;
    }
    
    public getImage() {
        return OP04_030_761.image;
    }
    
    public getName() {
        return OP04_030_761._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_030_761.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_030_761.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_030_761.archetypes;
    }
    
    public getPower(): number {
        return OP04_030_761.power;
    }

    public getCounter(): number {
        return OP04_030_761.counter;
    }

    public getLife(): number {
        return OP04_030_761.life;
    }
}
