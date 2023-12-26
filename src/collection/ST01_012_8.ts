
import Card, { CardType } from "../entities/Card";

export default class ST01_012_8 extends Card {
    public static id: string = "ST01_012_8";
    
    public static _name: string = "Monkey D. Luffy";

    public effect: string = "<Rush>(This Character can attack the turn it enters play.)\r\n[DON!! x2][When Attacking] Your opponent's can't activate <Blocker> for this battle.";
    
    public source: string = "Straw Hat Crew [ST-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST01-012_6bfaec_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = ["Rush>(This Character can attack the turn it enters play.)\r\n[DON!! x2][When Attacking] Your opponent's can't activate <Blocker"];
    
    public static archetypes: string[] = ["Supernovas","Straw Hat Crew"];
    
    public static power: number = 6000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST01_012_8.id;
    }
    
    public getType() : CardType {
        return ST01_012_8.type as CardType;
    }
    
    public getImage() {
        return ST01_012_8.image;
    }
    
    public getName() {
        return ST01_012_8._name;
    }
    
    public getCost(): number {
        return parseInt(ST01_012_8.cost);
    }
    
    public getKeywords(): string[] {
        return ST01_012_8.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST01_012_8.archetypes;
    }
    
    public getPower(): number {
        return ST01_012_8.power;
    }

    public getCounter(): number {
        return ST01_012_8.counter;
    }

    public getLife(): number {
        return ST01_012_8.life;
    }
}
