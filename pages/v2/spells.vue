<template>
    <div class="mb-3">
        <SaveButtons @click="saveConfig" @post="postConfigToPlugin"></SaveButtons>
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
            <div class="d-flex">
                <b-form class="my-1 mx-auto" inline>
                    <!-- Limit -->
                    <label class="mx-2">GE Limit</label>
                    <b-form-input v-model="geLimit" size="sm" placeholder="GE Restriction" type="number"></b-form-input>
                    <!-- Price -->
                    <label class="mx-2">Max Price</label>
                    <b-form-input v-model="gePrice" size="sm" placeholder="Max Price" type="number"></b-form-input>
                    <!-- Volume -->
                    <label class="mx-2">Min Volume</label>
                    <b-form-input v-model="geVolume" size="sm" placeholder="Min Volume" type="number"></b-form-input>
                    <!-- Members -->
                    <b-form-checkbox v-model="geMembers" class="mx-2">Members</b-form-checkbox>
                </b-form>
            </div>
            <b-table :items="filteredAlchItems" :fields="alchFields" per-page="5" :filter="alchFilter" :busy="alchBusy"
                small selectable select-mode="single" @row-selected="(item) => itemFilter = item[0].name">
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
    name: "Alch",
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
            alchFields: ["name", "buy_price", "high_alch_value", "sell_volume", "ge_restriction", "profit"],
            alchFilter: "",
            alchBusy: true,
            geLimit: 0,
            gePrice: 0,
            geVolume: 0,
            geMembers: true
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
        filteredAlchItems() {
            let filtered = this.sortedAlchItems.filter((item) => {
                if (parseInt(item.ge_restriction) < this.geLimit) {
                    return false
                } else if (this.gePrice > 0 && parseInt(item.buy_price) > this.gePrice) {
                    return false
                } else if (parseInt(item.sell_volume) < this.geVolume) {
                    return false
                } else if (!this.geMembers && item.members_only == 1) {
                    return false
                }
                return true
            })
            return filtered
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