export const state = () => ({
    startParam: 20447241,
    items: [
        ["Dagger", 1], ["Sword", 1], ["Scimitar", 2], ["Longsword", 2], ["2H Sword", 3], ["Axe", 1], ["Mace", 1],
        ["Warhammer", 3], ["Battleaxe", 3], ["Claws", 3], ["Chainbody", 3], ["Platelegs", 3], ["Plateskirt", 3],
        ["Platebody", 5], ["Nails", 1], ["Medium Helm", 1], ["Full Helm", 2], ["Square Shield", 2], ["Kiteshield", 3],
        "", ["Dart Tips", 1], ["Arrowtips", 1], ["Throwing Knives", 1], "", ["Javelin Heads", 1], ["Bolts", 1], ["Limbs", 1]
    ],
    bars: [
        {
            text: "Bronze",
            value: {
                id: 2349,
                uniqueItems: {
                    20447264: "Bronze Wire"
                }
            }
        },
        {
            text: "Iron",
            value: {
                id: 2351,
                uniqueItems: {
                    20447260: ["Lantern Frame", 1], 20447264: ["Iron Spit", 1]
                }
            }
        },
        {
            text: "Steel",
            value: {
                id: 2353,
                uniqueItems: {
                    20447260: ["Bullseye Lamp", 1], 20447264: ["Studs", 1]
                }
            }
        },
        {
            text: "Mithril",
            value: {
                id: 2359,
                uniqueItems: {
                    20447264: ["Grapple Tip", 1]
                }
            }
        },
        {
            text: "Adamant",
            value: {
                id: 2361,
                uniqueItems: {
                    20447264: "Javelin Heads", 20447265: ""
                }
            }
        },
        {
            text: "Rune",
            value: {
                id: 2363,
                uniqueItems: {
                    20447264: "Javelin Heads", 20447265: ""
                }
            }
        }
    ],
    banks: [
        {
            text: "Varrock West",
            value: {
                type: "Npc",
                id: 2897,
                opCode: 11,
                obj: 2097
            }
        },
        {
            text: "Prifddinas",
            value: {
                type: "Npc",
                id: 9131,
                opCode: 11,
                obj: 2097
            }

        }
    ]
});