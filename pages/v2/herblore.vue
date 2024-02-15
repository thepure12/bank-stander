<template>
    <div class="mb-3">
        <SaveButtons @click="saveConfig" @post="postConfigToPlugin"></SaveButtons>
        <b-form-radio-group v-model="operation" :options="operations" @change="onSelect"></b-form-radio-group>
        <div v-if="item && item.stackable || operation == herblore.tar" class="text-primary font-weight-bold mt-2">
            <!-- <b-icon icon="info-circle"></b-icon> -->
            <i>
                This is made with a stackable ingredient, keep the full stack in your
                invetory.
                <template v-if="operation == herblore.tar">
                    Also, make sure you have a pestal and mortar in your invetory.
                </template>
            </i>
        </div>
        <ConfigCardV2 v-model="bank" :items="banks" title="Bank" visible></ConfigCardV2>
        <ConfigCardV2 v-model="item" :items="operation.items" title="Item" visible></ConfigCardV2>
        <ConfigCardV2 v-if="item && item.items" v-model="menuParam" :items="item.items" title="Item" visible>
        </ConfigCardV2>
        <ConfigCardV2 v-for="(cfg, name, i) in config" :key="name" :title="getCfgTitle(name)" :config="cfg" visible>
        </ConfigCardV2>
    </div>
</template>
<script>
import herblore from '~/static/herblore.json'
import banks from '~/static/banks.json'
import config from '~/mixins/config.js'
export default {
    name: "Herblore",
    layout: "layoutv2",
    mixins: [config],
    data() {
        return {
            herblore: herblore,
            operations: [
                { text: "Potion", value: herblore.potion },
                { text: "Unfinished", value: herblore.unfinished },
                { text: "Tar", value: herblore.tar },
                { text: "Clean", value: herblore.clean }
            ],
            banks: banks,
            menuParam: null,
            operation: herblore.potion
        }
    },
    watch: {
        menuParam() {
            this.config.menu.param.value = this.menuParam
        }
    },
    methods: {
        onSelect() {
            this.item = this.operation.items[0].value
            this.setDefaultConfig(this.operation.config)
        }
    },
    created() {
        this.setDefaultConfig(this.operation.config)
    }
}
</script>