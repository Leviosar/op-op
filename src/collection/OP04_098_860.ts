
import Card, { CardType } from "../entities/Card";

export default class OP04_098_860 extends Card {
    public static id: string = "OP04_098_860";
    
    public static _name: string = "Otoko";

    public effect: string = "[On Play] You may trash 2 {Land of Wano} type cards from your hand: If you have 1 or less Life cards, add 1 card from the top of your deck to the top of your Life cards.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-098_97c48b_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Land of Wano"];
    
    public static power: number = 0;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_098_860.id;
    }
    
    public getType() : CardType {
        return OP04_098_860.type as CardType;
    }
    
    public getImage() {
        return OP04_098_860.image;
    }
    
    public getName() {
        return OP04_098_860._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_098_860.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_098_860.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_098_860.archetypes;
    }
    
    public getPower(): number {
        return OP04_098_860.power;
    }

    public getCounter(): number {
        return OP04_098_860.counter;
    }

    public getLife(): number {
        return OP04_098_860.life;
    }
}
