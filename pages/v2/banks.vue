<template>
    <div class="mb-3">
        <ConfigCardV2 v-model="bank" :items="banks" title="Bank" visible></ConfigCardV2>
        <ConfigCardV2 :title="getCfgTitle('bank')" :config="config.bank" visible>
        </ConfigCardV2>
    </div>
</template>
<script>
import banks from '~/static/banks.json'
import config from '~/mixins/config.js'
export default {
    name: "Banks",
    layout: "layoutv2",
    mixins: [config],
    data() {
        return {
            banks: banks
        }
    }
}
</script>