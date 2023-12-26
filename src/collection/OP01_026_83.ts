
import Card, { CardType } from "../entities/Card";

export default class OP01_026_83 extends Card {
    public static id: string = "OP01_026_83";
    
    public static _name: string = "Gum-Gum Red Hawk";

    public effect: string = "[Counter] Your Leader or up to 1 of your Characters gains 4000  Power for the duration of the battle. Then, K.O. one of your opponent’s Characters with 4000 Power or less.\r\n[Trigger] Your opponent's Leader or 1 of their Characters lose 10000 power for the duration of the turn.\r\n";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-026_05a4b1_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Supernovas","Straw Hat Crew"];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_026_83.id;
    }
    
    public getType() : CardType {
        return OP01_026_83.type as CardType;
    }
    
    public getImage() {
        return OP01_026_83.image;
    }
    
    public getName() {
        return OP01_026_83._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_026_83.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_026_83.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_026_83.archetypes;
    }
    
    public getPower(): number {
        return OP01_026_83.power;
    }

    public getCounter(): number {
        return OP01_026_83.counter;
    }

    public getLife(): number {
        return OP01_026_83.life;
    }
}
