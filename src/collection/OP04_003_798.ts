
import Card, { CardType } from "../entities/Card";

export default class OP04_003_798 extends Card {
    public static id: string = "OP04_003_798";
    
    public static _name: string = "Usopp";

    public effect: string = "[On K.O.] K.O. up to 1 of your opponent's Characters with 5000 base power or less.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-003_0fb35d_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Alabasta","Straw Hat Crew"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_003_798.id;
    }
    
    public getType() : CardType {
        return OP04_003_798.type as CardType;
    }
    
    public getImage() {
        return OP04_003_798.image;
    }
    
    public getName() {
        return OP04_003_798._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_003_798.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_003_798.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_003_798.archetypes;
    }
    
    public getPower(): number {
        return OP04_003_798.power;
    }

    public getCounter(): number {
        return OP04_003_798.counter;
    }

    public getLife(): number {
        return OP04_003_798.life;
    }
}
