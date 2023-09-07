<template>
    <div class="mb-3">
        <!-- <b-form-file v-model="file" placeholder="Select Runelite profile properties file" accept=".properties"
            @input="fileSelected"></b-form-file> -->
        <ConfigCardV2 v-model="bank" :items="cooking.banks" title="Bank"></ConfigCardV2>
        <ConfigCardV2 v-model="item" :items="cooking.items" title="Item"></ConfigCardV2>
        <ConfigCardV2 v-for="(cfg, name, i) in config" :key="name" :title="getCfgTitle(name)" :config="cfg"></ConfigCardV2>
    </div>
</template>
<script>
import cooking from '~/static/cooking.json'
import config from '~/mixins/config.js'
export default {
    name: "Cooking",
    layout: "layoutv2",
    mixins: [config],
    data() {
        return {
            cooking: cooking,
            file: null
        }
    },
    methods: {
        fileSelected(file) {
            file.text()
                .then(text => {
                    text.split("\n").forEach(e => {
                        if (e.includes("ElBank")) {
                            console.log(e);
                        }
                    })
                })
        }
    },
    created() {
        this.setDefaultConfig(this.cooking.config)
    }
}
</script>