
import Card, { CardType } from "../entities/Card";

export default class OP01_098_207 extends Card {
    public static id: string = "OP01_098_207";
    
    public static _name: string = "Kurozumi Orochi";

    public effect: string = "[On Play] Reveal 1 [Artificial Devil Fruit Smile] from your deck and add it to your hand. Then, shuffle your deck.";
    
    public source: string = "Romance Dawn [OP-01]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/OP01-098_290ef3_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "1";
    
    public static keywords: string[] = [];
    
    public static archetypes: string[] = ["Wano Country","Kurozumi Family"];
    
    public static power: number = 2000;

    public static counter: number = 2000;
    
    public static life: number = 0;
    
    public getId() {
        return OP01_098_207.id;
    }
    
    public getType() : CardType {
        return OP01_098_207.type as CardType;
    }
    
    public getImage() {
        return OP01_098_207.image;
    }
    
    public getName() {
        return OP01_098_207._name;
    }
    
    public getCost(): number {
        return parseInt(OP01_098_207.cost);
    }
    
    public getKeywords(): string[] {
        return OP01_098_207.keywords;
    }
    
    public getArchetypes(): string[] {
        return OP01_098_207.archetypes;
    }
    
    public getPower(): number {
        return OP01_098_207.power;
    }

    public getCounter(): number {
        return OP01_098_207.counter;
    }

    public getLife(): number {
        return OP01_098_207.life;
    }
}
