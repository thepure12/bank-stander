<template>
    <div class="mb-3">
        <SaveButtons @click="saveConfig"></SaveButtons>
        <ConfigCardV2 v-model="bank" :items="banks" title="Bank" visible></ConfigCardV2>
        <ConfigCardV2 v-model="item" :items="filteredItems" title="Item" @search="(search, loading) => itemFilter = search"
            visible vselect></ConfigCardV2>
        <ConfigCardV2 v-for="(cfg, name, i) in config" :key="name" :title="getCfgTitle(name)" :config="cfg" visible>
        </ConfigCardV2>
    </div>
</template>
<script>
import spells from '~/static/spells.json'
import banks from '~/static/banks.json'
import config from '~/mixins/config.js'
import SaveButtons from '~/components/SaveButtons.vue'
export default {
    name: "Spells",
    layout: "layoutv2",
    mixins: [config],
    data() {
        return {
            spells: spells,
            banks: banks,
            items: [],
            item: null,
            itemFilter: ""
        };
    },
    computed: {
        filteredItems() {
            if (this.itemFilter.length >= 3)
                return this.items.filter(item => item.text.toLowerCase().includes(this.itemFilter.toLowerCase()))
            else if (this.item) {
                return this.items.filter(item => item.value.id === this.item.id)
            }
            return []
        }
    },
    created() {
        this.setDefaultConfig(this.spells.alching.config);
        this.$axios.get("https://raw.githubusercontent.com/osrsbox/osrsbox-db/master/docs/items-search.json")
            .then(res => {
                this.items = Object.values(res.data)
                    .filter(item => item.type === "normal" || item.type === "noted" || item.duplicate === false)
                    .map(item => ({ text: `${item.name} (${item.type})`, value: { id: item.id } }))
            })
    },
    components: { SaveButtons }
}
</script>