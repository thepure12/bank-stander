<template>
    <div class="mb-3">
        <!-- <b-form-file v-model="file" placeholder="Select Runelite profile properties file" accept=".properties"
            @input="fileSelected"></b-form-file> -->
        <!-- <b-btn @click="selectFile">File</b-btn> -->
        <ConfigCardV2 v-model="bank" :items="cooking.banks" title="Bank"></ConfigCardV2>
        <ConfigCardV2 v-model="item" :items="cooking.items" title="Item"></ConfigCardV2>
        <ConfigCardV2 v-for="(cfg, name, i) in config" :key="name" :title="getCfgTitle(name)" :config="cfg"></ConfigCardV2>
    </div>
</template>
<script>
import cooking from '~/static/cooking.json'
import config from '~/mixins/config.js'
import Properties from '@js.properties/properties'
export default {
    name: "Cooking",
    layout: "layoutv2",
    mixins: [config],
    data() {
        return {
            cooking: cooking,
            fileHandle: null,
            properties: null
        }
    },
    methods: {
        fileSelected(file) {
            file.text()
                .then(text => {
                    text.split("\n").forEach(e => {
                        if (e.includes("ElBank")) {
                            console.log(e.split);
                        }
                    })
                })
        },
        async selectFile() {
            this.fileHandle = await window.showOpenFilePicker()
                .then(res => res[0])
                .catch(() => null)
            if (this.fileHandle) {
                this.fileHandle.getFile()
                    .then(file => {
                        file.text()
                            .then(text => {
                                this.properties = Properties.parseToProperties(text)
                                // General
                                // Item
                                this.properties["ElBankStander.firstId"] = '' + this.config.item.firstId.value
                                this.properties["ElBankStander.firstAmount"] = '' + this.config.item.firstAmount.value
                                this.properties["ElBankStander.secondId"] = '' + this.config.item.secondId.value
                                this.properties["ElBankStander.secondAmount"] = '' + this.config.item.secondAmount.value
                                this.properties["ElBankStander.placeholder1Id"] = '' + this.config.item.placeholderIds[0].value
                                this.properties["ElBankStander.placeholder2Id"] = '' + this.config.item.placeholderIds[1].value
                                this.properties["ElBankStander.placeholder3Id"] = '' + this.config.item.placeholderIds[2].value
                                console.log(this.properties["ElBankStander.firstId"]);
                                // Object

                                // Bankd
                                // Menu
                                // Inventory
                                this.fileHandle.createWritable()
                                    .then(writable => {
                                        writable.write(Properties.stringifyFromProperties(this.properties))
                                            .then(() => writable.close())

                                    })
                            })
                    })
            }
            this.fileHandle
        }
    },
    created() {
        this.setDefaultConfig(this.cooking.config)
    }
}
</script>