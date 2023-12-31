
import Card, { CardType } from "../entities/Card";

export default class OP04_090_756 extends Card {
    public static id: string = "OP04_090_756";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "This Character can attack active Characters. \r\n[Activate: Main] (Once per Turn) You may return 7 cards from your trash to the bottom of your deck in any order: Set this Character to active. Then, during your next Refresh Phase, this Character cannot be set to active.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-090_84b5a7_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Dressrosa","Straw Hat Crew"];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_090_756.id;
    }
    
    public getType() : CardType {
        return OP04_090_756.type as CardType;
    }
    
    public getImage() {
        return OP04_090_756.image;
    }
    
    public getName() {
        return OP04_090_756._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_090_756.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_090_756.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_090_756.archetypes;
    }
    
    public getPower(): number {
        return OP04_090_756.power;
    }

    public getCounter(): number {
        return OP04_090_756.counter;
    }

    public getLife(): number {
        return OP04_090_756.life;
    }
}
