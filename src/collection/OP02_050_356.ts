
import Card, { CardType } from "../entities/Card";

export default class OP02_050_356 extends Card {
    public static id: string = "OP02_050_356";
    
    public static _name: string = "Inazuma";

    public effect: string = "If you have 1 or less cards in your hand, this Character gains +2000 Power.\r\n<Blocker>";
    
    public source: string = "Paramount War [OP-02]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP02-050_2ad9de_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetypes: string[] = ["Impel Down","Revolutionary Army"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP02_050_356.id;
    }
    
    public getType() : CardType {
        return OP02_050_356.type as CardType;
    }
    
    public getImage() {
        return OP02_050_356.image;
    }
    
    public getName() {
        return OP02_050_356._name;
    }
    
    public getCost(): number {
        return parseInt(OP02_050_356.cost);
    }
    
    public getKeywords(): string[] {
        return OP02_050_356.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP02_050_356.archetypes;
    }
    
    public getPower(): number {
        return OP02_050_356.power;
    }

    public getCounter(): number {
        return OP02_050_356.counter;
    }

    public getLife(): number {
        return OP02_050_356.life;
    }
}
