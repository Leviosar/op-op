
import Card, { CardType } from "../entities/Card";

export default class P_014_269 extends Card {
    public static id: string = "P_014_269";
    
    public static _name: string = "Koby";

    public effect: string = "<Blocker>(After your opponent declares an attack, you may rest this card to make it the new target of the attack.)\r\n[Trigger] Play this card.";
    
    public source: string = "Promo [P]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/P-014_6ba56c_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "3";
    
    public static keywords: string[] = ["Blocker"];
    
    public static archetype: string[] = ["FILM","Navy"];
    
    public static power: number = 3000;

    public static counter: number = 0;
    
    public static life: number = 0;
    
    public getId() {
        return P_014_269.id;
    }
    
    public getType() : CardType {
        return P_014_269.type as CardType;
    }
    
    public getImage() {
        return P_014_269.image;
    }
    
    public getName() {
        return P_014_269._name;
    }
    
    public getCost(): number {
        return parseInt(P_014_269.cost);
    }
    
    public getKeywords(): string[] {
        return P_014_269.keywords;
    }
    
    public getArchetypes(): string[] {
        return P_014_269.archetypes;
    }
    
    public getPower(): number {
        return P_014_269.power;
    }

    public getCounter(): number {
        return P_014_269.counter;
    }

    public getLife(): number {
        return P_014_269.life;
    }
}
