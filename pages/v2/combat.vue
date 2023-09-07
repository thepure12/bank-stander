<template>
    <div class="mb-3">
        <ConfigCardV2 v-model="bank" :items="combat.banks" title="NPC"></ConfigCardV2>
        <ConfigCardV2 v-for="(cfg, name, i) in config" :key="name" :title="getCfgTitle(name)" :config="cfg"></ConfigCardV2>
    </div>
</template>
<script>
import combat from '~/static/combat.json'
import config from '~/mixins/config.js'
export default {
    name: "Combat",
    layout: "layoutv2",
    mixins: [config],
    data() {
        return {
            combat: combat
        }
    },
}
</script>