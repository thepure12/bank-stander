<template>
    <div class="mb-3">
        <SaveButtons @click="saveConfig"></SaveButtons>
        <ConfigCardV2 v-model="bank" :items="smithing.banks" title="Bank" visible></ConfigCardV2>
        <ConfigCardV2 v-model="item" :items="smithing.items" title="Item" visible></ConfigCardV2>
        <ConfigCardV2 v-if="item && item.items" v-model="output" :items="item.items" title="Item" visible></ConfigCardV2>
        <ConfigCardV2 v-for="(cfg, name, i) in config" :key="name" :title="getCfgTitle(name)" :config="cfg" visible>
        </ConfigCardV2>
    </div>
</template>
<script>
import smithing from '~/static/smithing.json'
import banks from '~/static/banks.json'
import config from '~/mixins/config.js'
export default {
    name: "Smithing",
    layout: "layoutv2",
    mixins: [config],
    data() {
        return {
            smithing: smithing,
            banks: banks,
            output: null,
        }
    },
    watch: {
        output() {
            this.config.menu.param.value = this.output.param
            this.config.item.firstAmount.value = 27 - 27 % this.output.bars
        }
    },
    methods: {
    },
    created() {
        this.setDefaultConfig(this.smithing.config)
    }
}
</script>