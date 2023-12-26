
import Card, { CardType } from "../entities/Card";

export default class ST08_013_739 extends Card {
    public static id: string = "ST08_013_739";
    
    public static _name: string = "Mr. 2 Bon Clay (Bentham)";

    public effect: string = "[DON!!x1] At the end of the battle in which this Character battles an opponent's Character, you may K.O. your opponent's Character that battled. If you do, K.O. this Character.";
    
    public source: string = "Side - Monkey D. Luffy [ST-08]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST08-013_735bee_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "5";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Former Baroque Works"];
    
    public static power: number = 6000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST08_013_739.id;
    }
    
    public getType() : CardType {
        return ST08_013_739.type as CardType;
    }
    
    public getImage() {
        return ST08_013_739.image;
    }
    
    public getName() {
        return ST08_013_739._name;
    }
    
    public getCost(): number {
        return parseInt(ST08_013_739.cost);
    }
    
    public getKeywords(): string[] {
        return ST08_013_739.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST08_013_739.archetypes;
    }
    
    public getPower(): number {
        return ST08_013_739.power;
    }

    public getCounter(): number {
        return ST08_013_739.counter;
    }

    public getLife(): number {
        return ST08_013_739.life;
    }
}
