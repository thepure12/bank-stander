<template>
    <div class="mb-3">
        <SaveButtons @click="saveConfig"></SaveButtons>
        <b-form-checkbox v-model="showCannonballs" class="my-2">Cannonballs</b-form-checkbox>
        <ConfigCardV2 v-model="bank" :items="banks" title="Bank" visible></ConfigCardV2>
        <template v-if="!showCannonballs">
            <ConfigCardV2 v-model="item" :items="anvil.items" title="Bar" visible></ConfigCardV2>
            <ConfigCardV2 v-if="item && item.items" v-model="output" :items="item.items" title="Item" visible>
            </ConfigCardV2>
        </template>
        <ConfigCardV2 v-else v-model="placeholders[0]" :items="cannonballs.placeholders" title="Mould"></ConfigCardV2>
        <ConfigCardV2 v-for="(cfg, name, i) in config" :key="name" :title="getCfgTitle(name)" :config="cfg" visible>
        </ConfigCardV2>
    </div>
</template>
<script>
import smithing from '~/static/smithing.json'
import config from '~/mixins/config.js'
export default {
    name: "Smithing",
    layout: "layoutv2",
    mixins: [config],
    data() {
        return {
            anvil: smithing.anvil,
            cannonballs: smithing.cannonballs,
            banks: smithing.anvil.banks,
            output: null,
            showCannonballs: false
        }
    },
    watch: {
        output() {
            this.config.menu.param.value = this.output.param
            this.config.item.firstAmount.value = 27 - 27 % this.output.bars
        },
        showCannonballs(show) {
            if (show) {
                this.setDefaultConfig(this.cannonballs.config)
                this.banks = this.cannonballs.banks
            } else {
                this.setDefaultConfig(this.anvil.config)
                this.banks = this.anvil.banks

            }
            this.bank = null
        }
    },
    methods: {
    },
    created() {
        this.setDefaultConfig(this.anvil.config)
    }
}
</script>