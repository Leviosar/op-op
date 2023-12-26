
import Card, { CardType } from "../entities/Card";

export default class OP01_078_217 extends Card {
    public static id: string = "OP01_078_217";
    
    public static _name: string = "Boa Hancock";

    public effect: string = "<Blocker> (After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n[DON!! x1] [When attacking]/[On Block] If your hand is 5 cards or less, draw 1 card.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-078_864478_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "4";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetypes: string[] = ["The Seven Warlords of the Sea","Kuja Pirates"];
    
    public static power: number = 5000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_078_217.id;
    }
    
    public getType() : CardType {
        return OP01_078_217.type as CardType;
    }
    
    public getImage() {
        return OP01_078_217.image;
    }
    
    public getName() {
        return OP01_078_217._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_078_217.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_078_217.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_078_217.archetypes;
    }
    
    public getPower(): number {
        return OP01_078_217.power;
    }

    public getCounter(): number {
        return OP01_078_217.counter;
    }

    public getLife(): number {
        return OP01_078_217.life;
    }
}
