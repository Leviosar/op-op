
import Card, { CardType } from "../entities/Card";

export default class OP04_097_781 extends Card {
    public static id: string = "OP04_097_781";
    
    public static _name: string = "Otama";

    public effect: string = "[On Play] Place up to 1 of your opponent's Characters that costs 3 or less with the {Animal} or {SMILE} type on top of their life area face-up.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-097_80dc14_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Land of Wano"];
    
    public static power: number = 0;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_097_781.id;
    }
    
    public getType() : CardType {
        return OP04_097_781.type as CardType;
    }
    
    public getImage() {
        return OP04_097_781.image;
    }
    
    public getName() {
        return OP04_097_781._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_097_781.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_097_781.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_097_781.archetypes;
    }
    
    public getPower(): number {
        return OP04_097_781.power;
    }

    public getCounter(): number {
        return OP04_097_781.counter;
    }

    public getLife(): number {
        return OP04_097_781.life;
    }
}
