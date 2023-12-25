
import Card, { CardType } from "../entities/Card";

export default class ST06_014_291 extends Card {
    public static id: string = "ST06_014_291";
    
    public static _name: string = "Impact Wave";

    public effect: string = "[Counter] Give up to 1 of your Leader or Characters +4000 Power during this battle. Then, K.O. up to 1 of your opponent's active Characters with a cost of 3 or less.\r\n[Trigger] K.O. up to 1 of your opponent's cost 4 or lower Characters.";
    
    public source: string = "Navy [ST-06]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST06-014_8074ed_jp.jpg";
    
    public static type: CardType = "event";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static power: number = 0;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return ST06_014_291.id;
    }
    
    public getType() : CardType {
        return ST06_014_291.type as CardType;
    }
    
    public getImage() {
        return ST06_014_291.image;
    }
    
    public getName() {
        return ST06_014_291._name;
    }
    
    public getCost(): number {
        return parseInt(ST06_014_291.cost);
    }
    
    public getKeywords(): string[] {
        return ST06_014_291.keywords;
    }
    
    public getPower(): number {
        return ST06_014_291.power;
    }

    public getCounter(): number {
        return ST06_014_291.counter;
    }

    public getLife(): number {
        return ST06_014_291.life;
    }
}
