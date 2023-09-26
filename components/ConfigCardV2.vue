<template>
    <b-card class="" header-class="p-0" body-class="px-2 py-1">
        <template #header>
            <div class="d-flex px-2 pt-1" v-b-toggle="`${uuid}`">
                <h6 class="mb-0">{{ title }}</h6>
                <div class="ml-auto px-2 py-0" size="sm">
                    <b-icon v-if="!show" icon="chevron-expand"></b-icon>
                    <b-icon v-else icon="chevron-contract"></b-icon>
                </div>
            </div>
        </template>
        <b-collapse :id="uuid" v-model="show">
            <template v-if="config">
                <template v-for="(v, k, i) in config">
                    <template v-if="(v instanceof Array)">
                        <ConfigValue v-for="(v2, j) in v" :key="v2.label + j" :label="v2.label" :value="v2.value">
                        </ConfigValue>
                    </template>
                    <template v-else-if="v.value !== 'Any'">
                        <!-- <img :src="`https://www.itemdb.biz/images/icons/${v.value}.png`" alt=""> -->
                        <ConfigValue :key="k + i" :label="v.label" :value="v.value"></ConfigValue>
                    </template>
                </template>
            </template>
            <template v-if="items">
                <template v-if="vselect">
                    <v-select :value="value" @input="v => $emit('input', v)" label="text" :reduce="item => item.value"
                        :options="items" placeholder="-- Please select and option --"
                        @search="(search, loading) => $emit('search', search, loading)">
                        <template #no-options="{ search, searching, loading }">
                            Search must be 3 or more characers.
                        </template>
                    </v-select>
                </template>
                <template v-else>
                    <b-form-select id="item" :value="value" @input="v => $emit('input', v)" :options="items">
                        <template #first>
                            <b-form-select-option :value="null" disabled>
                                -- Please select an option --
                            </b-form-select-option>
                        </template>
                    </b-form-select>
                </template>
            </template>
        </b-collapse>
    </b-card>
</template>
<script>
import { BIcon, BIconChevronExpand, BIconChevronContract } from 'bootstrap-vue'
import ConfigValue from './ConfigValue.vue';
export default {
    props: {
        title: String,
        visible: { type: Boolean, default: true },
        config: Object,
        items: Array,
        value: [Object, String, Number],
        vselect: { type: Boolean, default: false }
    },
    components: {
        BIcon,
        BIconChevronExpand,
        BIconChevronContract,
        ConfigValue
    },
    data() {
        return {
            uuid: ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
                (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
            ),
            show: this.visible
        }
    },
    watch: {
        visible(v) {
            this.show = v
        }
    }
}
</script>