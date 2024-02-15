<template>
    <div class="mb-3">
        <SaveButtons @click="saveConfig" @post="postConfigToPlugin"></SaveButtons>
        <ConfigCardV2 v-model="bank" :items="banks" title="Bank" visible></ConfigCardV2>
        <ConfigCardV2 v-model="item" :items="gemcutting.items" title="Item" visible></ConfigCardV2>
        <ConfigCardV2 v-for="(cfg, name, i) in config" :key="name" :title="getCfgTitle(name)" :config="cfg" visible>
        </ConfigCardV2>
    </div>
</template>
<script>
import gemcutting from '~/static/gemcutting.json'
import banks from '~/static/banks.json'
import config from '~/mixins/config.js'
import SaveButtons from '~/components/SaveButtons.vue'
export default {
    name: "GemCutting",
    layout: "layoutv2",
    mixins: [config],
    data() {
        return {
            gemcutting: gemcutting,
            banks: banks
        };
    },
    created() {
        this.setDefaultConfig(this.gemcutting.config);
    },
    components: { SaveButtons }
}
</script>