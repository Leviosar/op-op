
import Card, { CardType } from "../entities/Card";

export default class OP04_086_853 extends Card {
    public static id: string = "OP04_086_853";
    
    public static _name: string = "Chinjao";

    public effect: string = "[DON!! x1] When this Character battles and K.O.'s your opponent's Character, draw 2 cards and trash 2 cards from your hand.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-086_0a6ccb_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Dressrosa","Happosui Army"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_086_853.id;
    }
    
    public getType() : CardType {
        return OP04_086_853.type as CardType;
    }
    
    public getImage() {
        return OP04_086_853.image;
    }
    
    public getName() {
        return OP04_086_853._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_086_853.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_086_853.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_086_853.archetypes;
    }
    
    public getPower(): number {
        return OP04_086_853.power;
    }

    public getCounter(): number {
        return OP04_086_853.counter;
    }

    public getLife(): number {
        return OP04_086_853.life;
    }
}
