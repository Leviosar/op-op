
import Card, { CardType } from "../entities/Card";

export default class OP04_031_757 extends Card {
    public static id: string = "OP04_031_757";
    
    public static _name: string = "Donquixote Doflamingo";

    public effect: string = "[On Play] A total of up to 3 of your opponent's rested Characters or Leaders do not become active during your opponent's next refresh phase.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-031_e61c29_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "10";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["The Seven Warlords of the Sea","Donquixote Pirates"];
    
    public static power: number = 10000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_031_757.id;
    }
    
    public getType() : CardType {
        return OP04_031_757.type as CardType;
    }
    
    public getImage() {
        return OP04_031_757.image;
    }
    
    public getName() {
        return OP04_031_757._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_031_757.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_031_757.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_031_757.archetypes;
    }
    
    public getPower(): number {
        return OP04_031_757.power;
    }

    public getCounter(): number {
        return OP04_031_757.counter;
    }

    public getLife(): number {
        return OP04_031_757.life;
    }
}
