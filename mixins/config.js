export default {
    data() {
        return {
            config: {
                general: {
                    type: {
                        label: "Type",
                        value: "Any"
                    }
                },
                item: {
                    firstId: {
                        label: "First Item ID",
                        value: 0
                    },
                    firstAmount: {
                        label: "First Amount",
                        value: 0
                    },
                    secondId: {
                        label: "Second/Tool ID",
                        value: 0
                    },
                    secondAmount: {
                        label: "Second/Tool Amount",
                        value: 0
                    },
                    placeholderIds: [
                        {
                            label: "Placeholder ID",
                            value: 0
                        },
                        {
                            label: "Placeholder ID",
                            value: 0
                        },
                        {
                            label: "Placeholder ID",
                            value: 0
                        }]
                },
                object: {
                    id: {
                        label: "Object ID",
                        value: 0
                    }
                },
                bank: {
                    type: {
                        label: "Bank Type",
                        value: 0
                    },
                    id: {
                        label: "Bank ID",
                        value: 0
                    },
                    opcode: {
                        label: "Bank Op Code",
                        value: 0
                    },
                },
                menu: {
                    opcode: {
                        label: "Menu OpCode",
                        value: 0
                    },
                    param: {
                        label: "Menu Param1",
                        value: 0
                    }
                },
                inventory: {
                    opcode: {
                        label: "Inventory OpCode",
                        value: 0
                    }
                }
            },
            bank: null,
            item: null,
            tool: null,
            placeholders: [null, null, null]
        }
    },
    methods: {
        getCfgTitle(cfg) {
            return cfg.charAt(0).toUpperCase() + cfg.slice(1) + " Config"
        },
        setDefaultConfig(cfg) {
            for (let [key, val] of Object.entries(cfg)) {
                for (let [key2, val2] of Object.entries(val)) {
                    if (val2 instanceof Array) {
                        for (let i in val2) {
                            this.config[key][key2][0].value = val2[i]
                        }
                    } else {
                        this.config[key][key2].value = val2
                    }
                }
            }
        }
    },
    watch: {
        bank(bank) {
            this.config.bank.id.value = bank.id
            this.config.bank.type.value = bank.type
            this.config.bank.opcode.value = bank.opCode
            this.config.object.id.value = bank.obj || 0
        },
        item(item) {
            this.config.item.firstId.value = item.id
            if (item.secondId) {
                this.config.item.secondId.value = item.secondId
                if (item.stackable) {
                    this.config.general.type.value = "Use Tool on Item"
                    this.config.item.firstAmount.value = 27
                    this.config.item.secondAmount.value = 1
                } else {
                    this.config.general.type.value = "Use Item on Item"
                    this.config.item.firstAmount.value = 14
                    this.config.item.secondAmount.value = 14
                }
            }
        },
        tool(tool) {
            this.config.item.secondId.value = tool.id
            if (tool.firstAmount != null) {
                this.config.item.firstAmount.value = tool.firstAmount
            }
            if (tool.secondAmount != null) {
                this.config.item.secondAmount.value = tool.secondAmount
            }
        },
        placeholders(placeholders) {
            placeholders.forEach((p, i) => {
                this.config.item.placeholderIds[i].value = p ? p.id : 0
            });
        }
    }
}