<template>
    <b-card id="item-config" class="mb-3">
        <template #header>
            <h5 class="mb-0">Item Config</h5>
        </template>
        <p>First Item ID: {{ firstItem ? firstItem.id : 0 }}</p>
        <p>First Amount: {{ firstAmount ? firstAmount : 0 }}</p>
        <p>Use Second Item: {{ secondItem ? "On" : "Off" }}</p>
        <p>Second/Tool ID: {{ secondItem ? secondItem.id : 0 }}</p>
        <p>Second/Tool Amount: {{ secondAmount ? secondAmount : 0 }}</p>
        <p>Use Placeholders: {{ usePlaceholders ? "On" : "Off" }}</p>
        <p v-for="(p, i) in placeholders" :key="i">Placeholder ID: {{ p }}</p>
    </b-card>
</template>
<script>
export default {
    props: {
        firstItem: Object,
        firstAmount: Number,
        secondItem: Object,
        secondAmount: Number,
        placeholders: { type: Array, default: () => new Array(0, 0, 0) }
    },
    computed: {
        usePlaceholders() {
            return this.placeholders.reduce((sum, val) => sum + val)
        }
    }
}
</script>