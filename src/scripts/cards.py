import json
import re

from pathlib import Path

stub = """
import Card, { CardType } from "../entities/Card";

export default class %s extends Card {
    public static id: string = "%s";
    
    public static _name: string = "%s";

    public effect: string = "%s";
    
    public source: string = "%s";
    
    public static image: string = "%s";
    
    public static type: CardType = "%s";
    
    public static cost: string = "%s";
    
    public static keywords: string[] = [%s];
    
    public static power: number = %s;

    public static counter: number = %s;
    
    public static life: number = %s;
    
    public getId() {
        return %s.id;
    }
    
    public getType() : CardType {
        return %s.type as CardType;
    }
    
    public getImage() {
        return %s.image;
    }
    
    public getName() {
        return %s._name;
    }
    
    public getCost(): number {
        return parseInt(%s.cost);
    }
    
    public getKeywords(): string[] {
        return %s.keywords;
    }
    
    public getPower(): number {
        return %s.power;
    }

    public getCounter(): number {
        return %s.counter;
    }

    public getLife(): number {
        return %s.life;
    }
}
"""

with open("../data/cards.json", "r", encoding="utf-8") as fp:
    contents = fp.read()
    cards = json.loads(contents)
    
for card in cards:
    id_ = f"{card['cid'].replace('-', '_')}_{card['gid']}"
    file = Path(f"../collection/{id_}.ts")
    
    if file.is_file():
        continue
    
    if card["effect"] is not None:
        effect = card["effect"].replace("\n", "\\n").replace("\r", "\\r").replace("\"", '\\"')
        keywords = re.findall(r"(?<=\<).*(?=\>)", effect)
        keywords = [f"\"{k}\"" for k in keywords]
        keywords = ",".join(keywords)
        counter = re.search(r"(?<=\[Counter\+).*(?=\])", effect)
    
    name = card["name"].replace("\n", "\\n").replace("\r", "\\r").replace("\"", '\\"')
    
    types = {
        "1": "leader",
        "2": "char",
        "3": "event",
        "4": "stage",
        "5": "don"
    }
    
    type_ = types[card["card_type"]]
    
    contents = stub % (
        id_, 
        id_, 
        name, 
        effect, 
        card["source_name"], 
        card["image_url"], 
        type_,
        card["cost"],
        keywords,
        int(card["power"]) if card["power"] is not None else 0,
        int(counter.group()) if counter is not None else 0,
        int(card["life"]) if card["life"] is not None else 0,
        id_,
        id_,
        id_,
        id_,
        id_,
        id_,
        id_,
        id_,
        id_,
    )
    
    with open(file, 'w', encoding="utf-8") as fp:
        fp.write(contents)

contents = ""

imports = "import %s from \"./%s\";\n"

for card in cards:
    id_ = f"{card['cid'].replace('-', '_')}_{card['gid']}"
    contents += imports % (id_, id_)

contents += "export const collection = [\n"

for card in cards:
    id_ = f"{card['cid'].replace('-', '_')}_{card['gid']}"
    contents += "%s,\n" % (id_)

contents += "];\n"

file = Path(f"../collection/index.ts")
    
with open(file, 'w', encoding="utf-8") as fp:
    fp.write(contents)
