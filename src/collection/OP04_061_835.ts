
import Card, { CardType } from "../entities/Card";

export default class OP04_061_835 extends Card {
    public static id: string = "OP04_061_835";
    
    public static _name: string = "Tom";

    public effect: string = "[Activate: Main] You may trash this Character: If your Leader has the {Water Seven} type, add up to 1 DON!! card from your DON!! deck and rest it.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-061_369a98_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Fish-Man","Water Seven"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_061_835.id;
    }
    
    public getType() : CardType {
        return OP04_061_835.type as CardType;
    }
    
    public getImage() {
        return OP04_061_835.image;
    }
    
    public getName() {
        return OP04_061_835._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_061_835.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_061_835.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_061_835.archetypes;
    }
    
    public getPower(): number {
        return OP04_061_835.power;
    }

    public getCounter(): number {
        return OP04_061_835.counter;
    }

    public getLife(): number {
        return OP04_061_835.life;
    }
}
