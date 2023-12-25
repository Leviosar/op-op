
import Card, { CardType } from "../entities/Card";

export default class OP02_013_513 extends Card {
    public static id: string = "OP02_013_513";
    
    public static _name: string = "Portgas. D. Ace";

    public effect: string = "[On Play] Give up to 2 of your opponent's Characters -3000 Power during this turn. Then, if your Leader has [Whitebeard Pirates] in its types, this Character gains <Rush> during this turn.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-013_11eb73_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "7";
    
    public static keywords: string[] = ["Rush"];
    
    public static power: number = 7000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_013_513.id;
    }
    
    public getType() : CardType {
        return OP02_013_513.type as CardType;
    }
    
    public getImage() {
        return OP02_013_513.image;
    }
    
    public getName() {
        return OP02_013_513._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_013_513.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_013_513.keywords;
    }
    
    public getPower(): number {
        return OP02_013_513.power;
    }

    public getCounter(): number {
        return OP02_013_513.counter;
    }

    public getLife(): number {
        return OP02_013_513.life;
    }
}
