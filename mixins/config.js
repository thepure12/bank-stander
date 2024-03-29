// ✓
import Properties from '@js.properties/properties'
export default {
    data() {
        return {
            config: {
                general: {
                    type: {
                        label: "Type",
                        value: "Any"
                    },
                    spellOnItem: {
                        label: "Spell (On Item)",
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
                    useSecond: {
                        label: "Use Second Item",
                        value: "☐"
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
    computed: {
        fileHandle: {
            get() {
                return this.$store.state.properties.fileHandle
            },
            set(val) {
                this.$store.commit("properties/setFileHandle", val)
            }
        },
        properties: {
            get() {
                return this.$store.state.properties.properties
            },
            set(val) {
                this.$store.commit("properties/setProperties", val)
            }
        },
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
        },
        async selectFile() {
            this.fileHandle = await window.showOpenFilePicker({
                types: [
                    {
                        description: "Properties",
                        accept: { "text/properties": ".properties" }
                    }
                ]
            })
                .then(res => res[0])
                .catch(() => null);
            if (this.fileHandle) {
                this.fileHandle.getFile()
                    .then(file => {
                        file.text()
                            .then(text => {
                                this.properties = Properties.parseToProperties(text);
                                this.$bvToast.toast(`You can now save your config.`, {
                                    title: 'File Loaded',
                                    variant: "warning",
                                    solid: true
                                })
                            });
                    });
            }
        },
        async saveConfig() {
            if (!this.fileHandle) {
                await this.selectFile()
            }
            else if (this.properties && this.fileHandle) {
                let newProperties = Object.assign({}, this.properties)
                // General
                newProperties["ElBankStander.type"] = '' + this.config.general.type.value.replaceAll(" ", "_").toUpperCase()
                // Item
                newProperties["ElBankStander.firstId"] = '' + this.config.item.firstId.value
                newProperties["ElBankStander.firstAmount"] = '' + this.config.item.firstAmount.value
                newProperties["ElBankStander.useSecond"] = this.config.item.firstAmount.value ? "true" : "false"
                newProperties["ElBankStander.secondId"] = '' + this.config.item.secondId.value
                newProperties["ElBankStander.secondAmount"] = '' + this.config.item.secondAmount.value
                newProperties["ElBankStander.usePlaceholders"] = this.config.item.placeholderIds[0].value ? "true" : "false"
                newProperties["ElBankStander.placeholder1Id"] = '' + this.config.item.placeholderIds[0].value
                newProperties["ElBankStander.placeholder2Id"] = '' + this.config.item.placeholderIds[1].value
                newProperties["ElBankStander.placeholder3Id"] = '' + this.config.item.placeholderIds[2].value
                // Object
                newProperties["ElBankStander.objectId"] = '' + this.config.object.id.value
                // Bank
                newProperties["ElBankStander.bankType"] = '' + this.config.bank.type.value
                newProperties["ElBankStander.bankId"] = '' + this.config.bank.id.value
                newProperties["ElBankStander.bankOpCode"] = '' + this.config.bank.opcode.value
                // Menu
                newProperties["ElBankStander.menuOp"] = '' + this.config.menu.opcode.value
                newProperties["ElBankStander.menuParam1"] = '' + this.config.menu.param.value
                // Inventory
                newProperties["ElBankStander.inventoryOp"] = '' + this.config.inventory.opcode.value
                // Start
                newProperties["ElBankStander.startButton"] = '' + "false"


                this.properties = newProperties
                this.fileHandle.createWritable()
                    .then(writable => {
                        writable.write(Properties.stringifyFromProperties(this.properties))
                            .then(() => {
                                writable.close()
                                this.$bvToast.toast(`Successfully saved config.`, {
                                    title: 'Config Saved',
                                    autoHideDelay: 2000,
                                    variant: "success",
                                    solid: true
                                })
                            });
                    });
            } else {
                this.$bvToast.toast(`Unable to save config.`, {
                    title: 'Save Failed',
                    autoHideDelay: 2000,
                    variant: "danger",
                    solid: true
                })
            }
        },
        async postConfigToPlugin(port = 8080, start=false) {
            await this.$axios.post(`http://localhost:${port}/config`, {
                group: "ElBankStander",
                items: [
                    { key: "type", value: this.config.general.type.value.replaceAll(" ", "_").toUpperCase() },
                    { key: "firstId", value: this.config.item.firstId.value },
                    { key: "firstAmount", value: this.config.item.firstAmount.value },
                    { key: "useSecond", value: this.config.item.firstAmount.value },
                    { key: "secondId", value: this.config.item.secondId.value },
                    { key: "secondAmount", value: this.config.item.secondAmount.value },
                    { key: "usePlaceholders", value: this.config.item.placeholderIds[0].value ? true : false },
                    { key: "placeholder1Id", value: this.config.item.placeholderIds[0].value },
                    { key: "placeholder2Id", value: this.config.item.placeholderIds[1].value },
                    { key: "placeholder3Id", value: this.config.item.placeholderIds[2].value },
                    { key: "objectId", value: this.config.object.id.value },
                    { key: "bankType", value: this.config.bank.type.value },
                    { key: "bankId", value: this.config.bank.id.value },
                    { key: "bankOpCode", value: this.config.bank.opcode.value },
                    { key: "menuOp", value: this.config.menu.opcode.value },
                    { key: "menuParam1", value: this.config.menu.param.value },
                    { key: "inventoryOp", value: this.config.inventory.opcode.value },
                    { key: "startButton", value: start },
                ]
            })
            .then(res => {
                this.$bvToast.toast(`Config sent to RuneLite`, {
                    title: 'Success',
                    variant: "success",
                    solid: true
                })
            })
            .catch(err => {
                this.$bvToast.toast(`${err}`, {
                    title: 'Request Failed',
                    variant: "danger",
                    solid: true
                })
            })
        }
    },
    watch: {
        bank(bank) {
            if (!bank) return
            this.config.bank.id.value = bank.id
            this.config.bank.type.value = bank.type
            this.config.bank.opcode.value = bank.opCode
            this.config.object.id.value = bank.obj || 0
        },
        item(item) {
            if (item) {
                this.config.item.firstId.value = item.id
                if (item.firstAmount) this.config.item.firstAmount.value = item.firstAmount
                if (item.secondId) {
                    this.config.item.secondId.value = item.secondId
                    if (item.stackable) {
                        this.config.general.type.value = "Use Tool on Item"
                        this.config.item.firstAmount.value = 27
                        this.config.item.secondAmount.value = 1
                    } else if (this.config.item.firstAmount.value == 1 && this.config.item.firstAmount.value) {
                        // Do nothing
                    } else if (item.secondAmount) {
                        this.config.item.secondAmount.value = item.secondAmount
                    } else {
                        this.config.general.type.value = "Use Item on Item"
                        this.config.item.firstAmount.value = 14
                        this.config.item.secondAmount.value = 14
                    }
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