<template>
    <div class="mb-3">
        <SaveButtons @click="saveConfig" @post="postConfigToPlugin"></SaveButtons>
        <ConfigCardV2 v-model="bank" :items="banks" title="Bank" visible></ConfigCardV2>
        <ConfigCardV2 v-model="item" :items="armour.mats" title="Material" visible></ConfigCardV2>
        <ConfigCardV2 v-if="item" v-model="output" :items="item.items" title="Item" visible></ConfigCardV2>
        <ConfigCardV2 v-for="(cfg, name, i) in config" :key="name" :title="getCfgTitle(name)" :config="cfg" visible>
        </ConfigCardV2>
    </div>
</template>
<script>
import banks from '~/static/banks.json'
import armour from '~/static/armour.json'
import config from '~/mixins/config.js'
export default {
    name: "Armour",
    layout: "layoutv2",
    mixins: [config],
    data() {
        return {
            armour: armour,
            banks: banks,
            output: null
        }
    },
    watch: {
        output() {
            this.config.menu.param.value = this.output.param
            this.config.item.firstAmount.value = 26 - 26 % this.output.leather
        }
    },
    created() {
        this.setDefaultConfig(this.armour.config)
    }
}
</script>