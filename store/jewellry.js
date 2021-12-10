export const state = () => ({
    bars: {
        "Gold": {
            id: 2357,
            gems: { "Sapphire": 1607, "Emerald": 1605, "Ruby": 1603, "Diamond": 1601, "Dragonstone": 1615, "Onyx": 6573 },
            startParam: {
                1592: 29229063,
                1597: 29229077,
                1595: 29229090,
                11065: 29229102

            }
        },
        // "Silver": {
        //     id: 2355,
        //     gems: { "Opal": 1609, "Jade": 1611, "Red Topaz": 1613 }
        // }
    },
    items: {
        "Ring": { mould: 1592 },
        "Necklace": { mould: 1597 },
        "Amulet": { mould: 1595 },
        "Bracelet": { mould: 11065 }
    },
    banks: [
        {
            text: "Edgeville",
            value: {
                type: "Npc",
                id: 1613,
                opCode: 11,
                obj: 16469
            }
        }
    ]
});