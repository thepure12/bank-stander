<template>
    <div class="mb-3">
        <ConfigCardV2 v-model="bank" :items="banks" title="Bank" visible></ConfigCardV2>
        <!-- <ConfigCardV2 v-model="item" :items="operation.items" title="Item" visible></ConfigCardV2> -->
        <ConfigCardV2 v-if="item && item.items" v-model="menuParam" :items="item.items" title="Item" visible></ConfigCardV2>
        <ConfigCardV2 v-for="(cfg, name, i) in config" :key="name" :title="getCfgTitle(name)" :config="cfg" visible>
        </ConfigCardV2>
    </div>
</template>
<script>
import glassblowing from '~/static/glassblowing.json'
import banks from '~/static/banks.json'
import config from '~/mixins/config.js'
export default {
    name: "GlassBlowing",
    layout: "layoutv2",
    mixins: [config],
    data() {
        return {
            glassblowing: glassblowing,
            banks: banks,
            menuParam: null,
        }
    },
    watch: {
        menuParam() {
            this.config.menu.param.value = this.menuParam
        }
    },
    created() {
        this.item = this.glassblowing.items[0].value
        this.setDefaultConfig(this.glassblowing.config)
    }
}
</script>