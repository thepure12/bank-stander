<template>
    <div class="mb-3">
        <ConfigCardV2 v-model="bank" :items="banks" title="Bank" visible></ConfigCardV2>
        <ConfigCardV2 v-model="item" :items="armour.mats" title="Material" visible></ConfigCardV2>
        <ConfigCardV2 v-if="item" v-model="menuParam" :items="item.items" title="Item" visible></ConfigCardV2>
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
            menuParam: null
        }
    },
    watch: {
        menuParam() {
            this.config.menu.param.value = this.menuParam
        }
    },
    created() {
        this.setDefaultConfig(this.armour.config)
    }
}
</script>