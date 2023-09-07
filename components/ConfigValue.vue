<template>
    <p :class="textClass" @click="onClick">
        <span class="pr-1" v-b-tooltip.hover.right="'Copy to clipboard.'">
            {{ label }}: <b>{{ value }}</b>
            <b-icon class="ml-2" :variant="iconVariant" :icon="icon"></b-icon>
        </span>
    </p>
</template>
<script>
import { BIcon, BIconClipboard, BIconClipboardCheck } from 'bootstrap-vue';
export default {
    props: {
        label: String,
        value: [Number, String]
    },
    data() {
        return {
            copied: false
        }
    },
    computed: {
        iconVariant() {
            return this.copied ? "success" : "primary"
        },
        icon() {
            return this.copied ? "clipboard-check" : "clipboard"
        },
        textClass() {
            return this.copied ? "text-success" : ""
        },
    },
    methods: {
        onClick() {
            navigator.clipboard.writeText(this.value)
            this.copied = true
            setTimeout(() => this.copied = false, 2000)
        }
    },
    components: {
        BIcon,
        BIconClipboard,
        BIconClipboardCheck
    },
}
</script>
<style scoped>
p {
    /* display: inline-block; */
    margin-block: .15rem;
}

p:hover {
    cursor: pointer;
}

p>svg {
    font-size: larger;
}
</style>