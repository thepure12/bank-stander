<template>
    <div class="mb-3">
        <SaveButtons @click="saveConfig" @post="postConfigToPlugin"></SaveButtons>
        <ConfigCardV2 v-model="bank" :items="banks" title="Bank" visible></ConfigCardV2>
        <ConfigCardV2 v-model="item" :items="staves.items" title="Item" visible></ConfigCardV2>
        <ConfigCardV2 v-for="(cfg, name, i) in config" :key="name" :title="getCfgTitle(name)" :config="cfg" visible>
        </ConfigCardV2>
    </div>
</template>
<script>
import staves from '~/static/staves.json'
import banks from '~/static/banks.json'
import config from '~/mixins/config.js'
import SaveButtons from '~/components/SaveButtons.vue'
export default {
    name: "Staves",
    layout: "layoutv2",
    mixins: [config],
    data() {
        return {
            staves: staves,
            banks: banks
        };
    },
    created() {
        this.setDefaultConfig(this.staves.config);
    },
    components: { SaveButtons }
}
</script>