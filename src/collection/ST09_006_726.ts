
import Card, { CardType } from "../entities/Card";

export default class ST09_006_726 extends Card {
    public static id: string = "ST09_006_726";
    
    public static _name: string = "Kozuki Momonosuke";

    public effect: string = "";
    
    public source: string = "Side - Yamato [ST-09]";
    
    public static image: string = "https://onepiece-cardgame.dev/images/cards/ST09-006_49d7bd_jp.jpg";
    
    public static type: CardType = "char";
    
    public static cost: string = "2";
    
    public static keywords: string[] = [];
    
    public static archetype: string[] = ["Land of Wano","Kozuki Family"];
    
    public static power: number = 4000;

    public static counter: number = 1000;
    
    public static life: number = 0;
    
    public getId() {
        return ST09_006_726.id;
    }
    
    public getType() : CardType {
        return ST09_006_726.type as CardType;
    }
    
    public getImage() {
        return ST09_006_726.image;
    }
    
    public getName() {
        return ST09_006_726._name;
    }
    
    public getCost(): number {
        return parseInt(ST09_006_726.cost);
    }
    
    public getKeywords(): string[] {
        return ST09_006_726.keywords;
    }
    
    public getArchetypes(): string[] {
        return ST09_006_726.archetypes;
    }
    
    public getPower(): number {
        return ST09_006_726.power;
    }

    public getCounter(): number {
        return ST09_006_726.counter;
    }

    public getLife(): number {
        return ST09_006_726.life;
    }
}
