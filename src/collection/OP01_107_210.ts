
import Card, { CardType } from "../entities/Card";

export default class OP01_107_210 extends Card {
    public static id: string = "OP01_107_210";
    
    public static _name: string = "Babanuki";

    public effect: string = "";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-107_c8ac00_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Animal Kingdom Pirates","SMILE"];
    
    public static power: number = 7000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_107_210.id;
    }
    
    public getType() : CardType {
        return OP01_107_210.type as CardType;
    }
    
    public getImage() {
        return OP01_107_210.image;
    }
    
    public getName() {
        return OP01_107_210._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_107_210.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_107_210.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_107_210.archetypes;
    }
    
    public getPower(): number {
        return OP01_107_210.power;
    }

    public getCounter(): number {
        return OP01_107_210.counter;
    }

    public getLife(): number {
        return OP01_107_210.life;
    }
}
