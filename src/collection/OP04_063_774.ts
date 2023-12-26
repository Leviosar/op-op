
import Card, { CardType } from "../entities/Card";

export default class OP04_063_774 extends Card {
    public static id: string = "OP04_063_774";
    
    public static _name: string = "Franky";

    public effect: string = "[On Your Opponent's Attack] [Once Per Turn] DON!! -1: If your Leader has the {Water 7} type, up to 1 of your Leader or Characters gains +1000 Power during this battle.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-063_c6baf2_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Water 7","Franky Family"];
    
    public static power: number = 1000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_063_774.id;
    }
    
    public getType() : CardType {
        return OP04_063_774.type as CardType;
    }
    
    public getImage() {
        return OP04_063_774.image;
    }
    
    public getName() {
        return OP04_063_774._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_063_774.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_063_774.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_063_774.archetypes;
    }
    
    public getPower(): number {
        return OP04_063_774.power;
    }

    public getCounter(): number {
        return OP04_063_774.counter;
    }

    public getLife(): number {
        return OP04_063_774.life;
    }
}
