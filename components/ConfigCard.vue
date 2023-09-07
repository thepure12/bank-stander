<template>
    <b-card id="bank-config" class="" header-class="p-0" body-class="px-2 py-1">
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
            <slot></slot>
        </b-collapse>
    </b-card>
</template>
<script>
import { BIcon, BIconChevronExpand, BIconChevronContract } from 'bootstrap-vue'
export default {
    props: {
        title: String,
        visible: Boolean
    },
    components: {
        BIcon,
        BIconChevronExpand,
        BIconChevronContract
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