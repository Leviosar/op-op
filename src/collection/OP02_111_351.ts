
import Card, { CardType } from "../entities/Card";

export default class OP02_111_351 extends Card {
    public static id: string = "OP02_111_351";
    
    public static _name: string = "Fullbody";

    public effect: string = "[When Attacking] If you have [Django] in play, this Character gains +3000 Power during this battle.";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-111_58cd34_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Navy"];
    
    public static power: number = 3000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_111_351.id;
    }
    
    public getType() : CardType {
        return OP02_111_351.type as CardType;
    }
    
    public getImage() {
        return OP02_111_351.image;
    }
    
    public getName() {
        return OP02_111_351._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_111_351.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_111_351.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_111_351.archetypes;
    }
    
    public getPower(): number {
        return OP02_111_351.power;
    }

    public getCounter(): number {
        return OP02_111_351.counter;
    }

    public getLife(): number {
        return OP02_111_351.life;
    }
}
