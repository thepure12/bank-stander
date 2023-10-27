<template>
    <div class="mb-3">
        <SaveButtons @click="saveConfig"></SaveButtons>
        <ConfigCardV2 title="Alch Values">
            <b-input-group size="sm">
                <b-input-group-prepend>
                    <b-btn @click="fetchAlchItems">&#x21bb;</b-btn>
                </b-input-group-prepend>
                <b-form-input id="filter-input" v-model="alchFilter" type="search" placeholder="Search alch values"
                    debounce="500"></b-form-input>
                <b-input-group-append>
                    <b-button :disabled="!alchFilter" @click="alchFilter = ''">Clear</b-button>
                </b-input-group-append>
            </b-input-group>
            <b-table :items="sortedAlchItems" :fields="alchFields" per-page="5" :filter="alchFilter" :busy="alchBusy" small
                selectable select-mode="single" @row-selected="(item) => itemFilter = item[0].name">
                <template #cell(profit)="data">
                    {{ data.item.high_alch_value - data.item.buy_price - natPrice }}
                </template>
                <template #table-busy>
                    <div class="text-center text-success my-2">
                        <b-spinner class="align-middle mr-2"></b-spinner>
                        <strong>Calculating alch profit</strong>
                    </div>
                </template>
            </b-table>
        </ConfigCardV2>
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
            itemFilter: "",
            alchItems: [],
            alchFields: ["name", "buy_price", "high_alch_value", "ge_restriction", "profit"],
            alchFilter: "",
            alchBusy: true
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
        },
        sortedAlchItems() {
            let sorted = this.alchItems.sort((a, b) => {
                const profitA = a.high_alch_value - a.buy_price - this.natPrice
                const profitB = b.high_alch_value - b.buy_price - this.natPrice
                return profitB - profitA
            })
            return sorted
        },
        natPrice() {
            return this.alchItems.find(item => item.itemid === 561).buy_price
        }
    },
    methods: {
        fetchAlchItems() {
            this.alchBusy = true
            this.$axios.get("https://alchmate.com/api//summary/osrs")
                .then(res => {
                    this.alchItems = res.data.data
                    this.alchBusy = false
                })
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
        this.fetchAlchItems()
    },
    components: { SaveButtons }
}
</script>