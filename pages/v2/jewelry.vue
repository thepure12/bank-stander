<template>
    <div class="mb-3">
        <SaveButtons @click="saveConfig" @post="postConfigToPlugin"></SaveButtons>
        <ConfigCardV2 v-model="bank" :items="jewelry.banks" title="Bank"></ConfigCardV2>
        <ConfigCardV2 v-model="item" :items="jewelry.items" title="Bar"></ConfigCardV2>
        <ConfigCardV2 v-if="item && item.items" v-model="tool" :items="item.items" title="Gem"></ConfigCardV2>
        <ConfigCardV2 v-if="item && item.placeholders" v-model="placeholders[0]" :items="item.placeholders" title="Mould"></ConfigCardV2>
        <ConfigCardV2 v-for="(cfg, name, i) in config" :key="name" :title="getCfgTitle(name)" :config="cfg"></ConfigCardV2>
    </div>
</template>
<script>
import jewelry from '~/static/jewelry.json'
import config from '~/mixins/config.js'
export default {
    name: "Jewelry",
    layout: "layoutv2",
    mixins: [config],
    data() {
        return {
            jewelry: jewelry,
        }
    },
    computed: {
        menuParam() {
            if (this.tool && this.placeholders[0]) {
                let param = this.item.param + this.tool.menuOffset + this.placeholders[0].menuOffset
                if (this.placeholders[0].id === 11065 && this.tool.id !== 2357 && this.item.id === 2357) {
                    param += 1
                }
                return param
            }
        }
    },
    watch: {
        menuParam() {
            this.config.menu.param.value = this.menuParam
        },
        item() {
            this.tool = this.item.items[0].value
            this.placeholders[0] = this.item.placeholders[0].value
        }
    },
    created() {
        this.setDefaultConfig(this.jewelry.config)
        // this.item = this.jewelry.items[0].value
        // this.tool = this.item.items[0].value
        // this.placeholders[0] = this.item.placeholders[0].value
    },
    mounted() {
        
    }
}
</script>