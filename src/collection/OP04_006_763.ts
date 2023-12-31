
import Card, { CardType } from "../entities/Card";

export default class OP04_006_763 extends Card {
    public static id: string = "OP04_006_763";
    
    public static _name: string = "Koza";

    public effect: string = "[When Attacking] You may give one of your active Leaders -5000 Power this turn: This character gains +2000 Power until the start of your next turn.";
    
    public source: string = "Kingdoms of Intrigue [OP-04]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP04-006_eee0c2_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Alabasta Kingdom"];
    
    public static power: number = 3000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP04_006_763.id;
    }
    
    public getType() : CardType {
        return OP04_006_763.type as CardType;
    }
    
    public getImage() {
        return OP04_006_763.image;
    }
    
    public getName() {
        return OP04_006_763._name;
    }
    
    public getCost(): number {
        return parseInt(OP04_006_763.cost);
    }
    
    public getKeywords(): string[] {
        return OP04_006_763.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP04_006_763.archetypes;
    }
    
    public getPower(): number {
        return OP04_006_763.power;
    }

    public getCounter(): number {
        return OP04_006_763.counter;
    }

    public getLife(): number {
        return OP04_006_763.life;
    }
}
