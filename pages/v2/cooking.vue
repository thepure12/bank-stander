<template>
    <div class="mb-3">
        <SaveButtons @click="saveConfig"></SaveButtons>
        <ConfigCardV2 v-model="bank" :items="cooking.banks" title="Bank"></ConfigCardV2>
        <ConfigCardV2 v-model="item" :items="cooking.items" title="Item"></ConfigCardV2>
        <ConfigCardV2 v-for="(cfg, name, i) in config" :key="name" :title="getCfgTitle(name)" :config="cfg"></ConfigCardV2>
    </div>
</template>
<script>
import cooking from '~/static/cooking.json'
import config from '~/mixins/config.js'
export default {
    name: "Cooking",
    layout: "layoutv2",
    mixins: [config],
    data() {
        return {
            cooking: cooking,
        }
    },
    watch: {
        item() {
            if (this.item.param) {
                this.config.menu.param.value = this.item.param
            } else {
                this.config.menu.param.value = this.cooking.config.menu.param
            }
        }
    },
    created() {
        this.setDefaultConfig(this.cooking.config)
    }
}
</script>