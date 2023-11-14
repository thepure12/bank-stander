<template>
    <div class="mb-3">
        <SaveButtons @click="saveConfig"></SaveButtons>
        <b-form-radio-group v-model="operation" :options="operations" @change="onSelect"></b-form-radio-group>
        <ConfigCardV2 v-model="bank" :items="banks" title="Bank" visible></ConfigCardV2>
        <ConfigCardV2 v-model="item" :items="operation.items" title="Item" visible></ConfigCardV2>
        <ConfigCardV2 v-if="item && item.items" v-model="menuParam" :items="item.items" title="Item" visible></ConfigCardV2>
        <ConfigCardV2 v-for="(cfg, name, i) in config" :key="name" :title="getCfgTitle(name)" :config="cfg" visible>
        </ConfigCardV2>
    </div>
</template>
<script>
import fletching from '~/static/fletching.json'
import banks from '~/static/banks.json'
import config from '~/mixins/config.js'
export default {
    name: "Fletching",
    layout: "layoutv2",
    mixins: [config],
    data() {
        return {
            operations: [
                { text: "Unstrung", value: fletching.unstrung },
                { text: "Strung", value: fletching.strung },
                { text: "Darts", value: fletching.darts },
                { text: "Tipped Bolts", value: fletching.tipped_bolts }
            ],
            banks: banks,
            menuParam: null,
            operation: fletching.unstrung
        }
    },
    watch: {
        menuParam() {
            this.config.menu.param.value = this.menuParam
        }
    },
    methods: {
        onSelect() {
            this.setDefaultConfig(this.operation.config)
        }
    },
    created() {
        this.setDefaultConfig(this.operation.config)
    }
}
</script>