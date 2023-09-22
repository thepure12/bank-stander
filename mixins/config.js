import Properties from '@js.properties/properties'
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
                newProperties["ElBankStander.type"] = ''
                // Item
                newProperties["ElBankStander.firstId"] = '' + this.config.item.firstId.value
                newProperties["ElBankStander.firstAmount"] = '' + this.config.item.firstAmount.value
                newProperties["ElBankStander.secondId"] = '' + this.config.item.secondId.value
                newProperties["ElBankStander.secondAmount"] = '' + this.config.item.secondAmount.value
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