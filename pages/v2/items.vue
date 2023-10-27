<template>
    <div class="mb-3">
        <b-form-group label-for="filter-input">
            <b-input-group size="sm">
                <b-form-input id="filter-input" v-model="filter" type="search" placeholder="Type to Search" debounce="500"
                    @input="isFiltering = true"></b-form-input>
                <b-input-group-append>
                    <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                </b-input-group-append>
            </b-input-group>
        </b-form-group>
        <b-pagination v-model="currentPage" :total-rows="items.length" :per-page="perPage" pills
            aria-controls="items"></b-pagination>
        <b-table id="items" :items="items" :per-page="perPage" :current-page="currentPage" :filter="filter"
            :filter-ignored-fields="ignoredFields" :busy="isFiltering" @filtered="isFiltering = false"
            :filter-function="filterFunc">
            <template #cell(id)="data">
                {{ data.value }}
            </template>
            <template #table-busy>
                <div class="text-center text-success my-2">
                    <b-spinner class="align-middle mr-2"></b-spinner>
                    <strong>Searching...</strong>
                </div>
            </template>
        </b-table>
    </div>
</template>
<script>
export default {
    name: "Items",
    layout: "layoutv2",
    data() {
        return {
            perPage: 25,
            currentPage: 1,
            items: [],
            filter: "",
            ignoredFields: ["type", "duplicate"],
            isFiltering: false
        }
    },
    methods: {
        filterFunc(data, filter) {
            return data.id == filter || data.name.toLowerCase().includes(filter.toLowerCase())
        }
    },
    created() {
        this.$axios.get("https://raw.githubusercontent.com/osrsbox/osrsbox-db/master/docs/items-search.json")
            .then(res => {
                this.items = Object.values(res.data)
                    .filter(item => item.type === "normal" || item.type === "noted" || item.duplicate === false)
                // .map(item => ({ text: `${item.name} (${item.type})`, value: { id: item.id } }))
            })
    }
}
</script>