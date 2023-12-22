import CardAction from "./CardAction";
import CardActionMetadata from "./CardActionMetadata";
import Player from "./Player";
import { v4 as uuid } from 'uuid';

export default class Card {
    public uuid: string = uuid();

    public static id: string = "";

    public static image: string | null = null;

    public static type: "char" | "don" | "leader" | "stage" | "event" | null = null;

    public static name: string = "";

    public _tapped: boolean = false;
    
    public summonedAt: number = -1;

    public source: string = "";

    public effect: string = "";

    public attached: Card[] = [];

    public getImage(): string {
        return "";
    }

    public getType(): "char" | "don" | "leader" | "stage" | "event" {
        return "don";
    }

    public getCost(): number {
        return 0;
    }

    public tap() {
        this._tapped = true;
    }

    public untap() {
        this._tapped = false;
    }

    get tapped() {
        return this._tapped;
    }

    get actions(): CardAction[] {
        const types: Record<string, CardAction[]> = {
            "don": [
                { id: "attach", name: "Attach" },
            ],
            "char": [
                { id: "summon", name: "Summon" },
                { id: "trigger", name: "Effect" },
                { id: "attack", name: "Attack"},
            ],
            "leader": [
                { id: "trigger", name: "Effect" },
                { id: "attack", name: "Attack"},
            ],
            "stage": [
                { id: "trigger", name: "Effect" },
            ],
            "event": [
                { id: "trigger", name: "Effect" },
            ]
        }

        return types[this.getType()];
    }

    public execute(action: CardAction, player: Player, metadata: CardActionMetadata | null) {
        switch (action.id) {
            case "summon":
                this.summon(player, metadata)
            break;
            case "trigger":
                this.trigger(player, metadata)
            break;
        }
    }

    public summon(player: Player, metadata: CardActionMetadata | null) {
        // Summon cost
        if (player.cost.filter(c => !c.tapped).length < this.getCost()) {
            return;
        }

        player.pay(this.getCost())

        switch (this.getType()) {
            case "char":
                setTimeout(() => {
                    player.characters.push(this)
                }, 1000)
                break;
            case "stage":
                setTimeout(() => {
                    player.stage = this
                }, 1000)
                break
            default:
                break;
        }
        
        if (metadata?.origin === "hand") {
            player.hand = player.hand.filter((c) => c !== this)
        }
    }

    public trigger(player: Player, metadata: CardActionMetadata | null) {
        // Summon cost
        if (player.cost.filter(c => !c.tapped).length >= 1) {
            player.characters.push(this)
            player.pay(1)
        }
    }
}