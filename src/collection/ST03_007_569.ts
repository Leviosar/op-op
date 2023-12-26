
import Card, { CardType } from "../entities/Card";

export default class ST03_007_569 extends Card {
    public static id: string = "ST03_007_569";
    
    public static _name: string = "Sentomaru";

    public effect: string = "[DON!! x1] [Activate Main] [Once Per Turn] (2) (Rest the designated amount of DON!! cards in your Cost Area.): Play up to 1 cost 4 or lower [Pacifista] from your deck. Then, shuffle your deck.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST03-007_40d181_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST03_007_569.id;
    }
    
    public getType() : CardType {
        return ST03_007_569.type as CardType;
    }
    
    public getImage() {
        return ST03_007_569.image;
    }
    
    public getName() {
        return ST03_007_569._name;
    }
    
    public getCost(): number {
        return parseInt(ST03_007_569.cost);
    }
    
    public getKeywords(): string[] {
        return ST03_007_569.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST03_007_569.archetypes;
    }
    
    public getPower(): number {
        return ST03_007_569.power;
    }

    public getCounter(): number {
        return ST03_007_569.counter;
    }

    public getLife(): number {
        return ST03_007_569.life;
    }
}
