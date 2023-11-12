<template>
    <div class="mb-3">
        <ConfigCardV2 v-model="shop" :items="shopper.shops" title="Shops" visible vselect></ConfigCardV2>
        <ConfigCardV2 title="Items" visible>
            <b-table v-if="shop" :items="shop.items" :fields="fields" small responsive>
                <template #cell(buy_ammount)="data">
                    <b-form-input v-model="data.item.buy_amount" type="number" size="sm" min="0" :max="data.item.stock"
                        placeholder="0"
                        :state="data.item.buy_amount ? data.item.buy_amount >= 0 && data.item.buy_amount <= data.item.stock : null"
                        no-wheel></b-form-input>
                </template>
            </b-table>
        </ConfigCardV2>
        <ConfigCardV2 v-for="(cfg, name, i) in config" :key="name" :title="getCfgTitle(name)" :config="cfg" visible>
        </ConfigCardV2>
    </div>
</template>
<script>
import shopper from '~/static/shopper.json'
export default {
    name: "Shopper",
    layout: "layoutv2",
    data() {
        return {
            shopper: shopper,
            shop: null,
            fields: ['item', 'stock', 'buy_ammount'],
        }
    },
    computed: {
        config() {
            return {
                general: {
                    shop: {
                        label: "Shop",
                        value: "Custom"
                    },
                    packs: {
                        label: "Open Packs",
                        value: "☐"
                    },
                    stams: {
                        label: "Staminas",
                        value: "☐"
                    },
                    slots: {
                        label: "Slots",
                        value: this.shop ? this.shop.items
                            .filter(x => x.buy_amount > 0)
                            .map(x => x.slot)
                            .join(",") : "0,0,0"
                    },
                    quantities: {
                        label: "Quantities",
                        value: this.shop ? this.shop.items
                            .filter(x => x.buy_amount > 0)
                            .map(x => x.stock - x.buy_amount)
                            .join(",") : "0,0,0"
                    }
                },
                custom: {
                    name: {
                        label: "Shop Name",
                        value: this.shop ? this.shop.name : "name"
                    },
                    location: {
                        label: "Shop Loc",
                        value: this.shop ? this.shop.location : "x,y"
                    },
                    option: {
                        label: "Shop Option",
                        value: this.shop ? this.shop.option : "Third"
                    }
                }
            }
        }
    },
    methods: {
        getCfgTitle(cfg) {
            return cfg.charAt(0).toUpperCase() + cfg.slice(1)
        }
    }
}
</script>