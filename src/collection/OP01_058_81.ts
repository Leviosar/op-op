
import Card, { CardType } from "../entities/Card";

export default class OP01_058_81 extends Card {
    public static id: string = "OP01_058_81";
    
    public static _name: string = "Punk Gibson";

    public effect: string = "[Counter] Your Leader or up to 1 of your Characters gains 4000  Power for the duration of the battle. Then, rest one of your opponent’s Characters that costs 4 or less.\r\n[Trigger] Rest 1 of your opponent's Characters.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-058_280365_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Supernovas","Kid Pirates"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_058_81.id;
    }
    
    public getType() : CardType {
        return OP01_058_81.type as CardType;
    }
    
    public getImage() {
        return OP01_058_81.image;
    }
    
    public getName() {
        return OP01_058_81._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_058_81.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_058_81.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_058_81.archetypes;
    }
    
    public getPower(): number {
        return OP01_058_81.power;
    }

    public getCounter(): number {
        return OP01_058_81.counter;
    }

    public getLife(): number {
        return OP01_058_81.life;
    }
}
