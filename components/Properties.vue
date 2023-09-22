<template>
    <div>
        <b-form-group>
            <b-btn @click="selectFile">Load</b-btn>
            <!-- <b-btn @click="saveProperties">Save</b-btn> -->
        </b-form-group>
        <div>
            <ConfigCardV2 title="General Config" :config="generalConfig"></ConfigCardV2>
            <ConfigCardV2 title="Item Config" :config="itemConfig"></ConfigCardV2>
            <ConfigCardV2 title="Object Config" :config="objectConfig"></ConfigCardV2>
            <ConfigCardV2 title="Bank Config" :config="bankConfig"></ConfigCardV2>
            <ConfigCardV2 title="Menu Config" :config="menuConfig"></ConfigCardV2>
            <ConfigCardV2 title="Inventory Config" :config="inventoryConfig"></ConfigCardV2>
        </div>
    </div>
</template>
<script>
import Properties from '@js.properties/properties'
import ConfigCardV2 from './ConfigCardV2.vue'
export default {
    data() {
        return {
        };
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
        bankStanderProps() {
            return Object.fromEntries(Object.entries(this.properties)
                .filter(([key]) => key.includes('ElBankStander')))
            // .sort()
            // .map(e => ({ name: e[0].replace("ElBankStander.", ""), value: e[1] }));
        },
        generalConfig() {
            return {
                "type": { "label": "Type", "value": this.properties["ElBankStander.type"] }
            }
        },
        itemConfig() {
            return {
                "firstId": { "label": "First Item ID", "value": this.properties["ElBankStander.firstId"] },
                "firstAmount": { "label": "First Amount", "value": this.properties["ElBankStander.firstAmount"] },
                "secondId": { "label": "Second/Tool ID", "value": this.properties["ElBankStander.secondId"] },
                "secondAmount": { "label": "Second/Tool Amount", "value": this.properties["ElBankStander.secondAmount"] },
                "placeholderIds": [
                    { "label": "Placeholder ID", "value": this.properties["ElBankStander.placeholder1Id"] },
                    { "label": "Placeholder ID", "value": this.properties["ElBankStander.placeholder2Id"] },
                    { "label": "Placeholder ID", "value": this.properties["ElBankStander.placeholder3Id"] }]
            }
        },
        objectConfig() {
            return {
                "id": { "label": "Object ID", "value": this.properties["ElBankStander.objectId"] }
            }
        },
        bankConfig() {
            return {
                "type": { "label": "Bank Type", "value": this.properties["ElBankStander.bankType"] },
                "id": { "label": "Bank ID", "value": this.properties["ElBankStander.bankId"] },
                "opcode": { "label": "Bank Op Code", "value": this.properties["ElBankStander.bankOpCode"] }
            }
        },
        menuConfig() {
            return {
                "opcode": { "label": "Menu OpCode", "value": this.properties["ElBankStander.menuOp"] },
                "param": { "label": "Menu Param1", "value": this.properties["ElBankStander.menuParam1"] }
            }
        },
        inventoryConfig() {
            return {
                "opcode": { "label": "Inventory OpCode", "value": this.properties["ElBankStander.inventoryOp"] }
            }
        }
    },
    methods: {
        async selectFile() {
            this.fileHandle = await window.showOpenFilePicker()
                .then(res => res[0])
                .catch(() => null);
            if (this.fileHandle) {
                this.fileHandle.getFile()
                    .then(file => {
                        file.text()
                            .then(text => {
                                this.properties = Properties.parseToProperties(text);
                            });
                    });
            }
        },
        async saveProperties() {
            this.fileHandle.createWritable()
                .then(writable => {
                    writable.write(Properties.stringifyFromProperties(this.properties))
                        .then(() => writable.close());
                });
        }
    },
    components: { ConfigCardV2, ConfigCardV2 }
}
</script>