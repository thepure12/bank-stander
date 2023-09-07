<template>
    <ConfigCard title="Item Config" :visible="visible">
        <ConfigValue label="First Item ID" :value="firstItem ? firstItem.id : 0"></ConfigValue>
        <ConfigValue label="First Amount" :value="firstAmount ? firstAmount : 0"></ConfigValue>
        <ConfigValue label="Use Second Item" :value="secondItem ? 'On' : 'Off'"></ConfigValue>
        <ConfigValue label="Second/Tool ID" :value="secondItem ? secondItem.id : 0"></ConfigValue>
        <ConfigValue label="Second/Tool Amount" :value="secondAmount ? secondAmount : 0"></ConfigValue>
        <ConfigValue label="Use Placeholders" :value="usePlaceholders ? 'On' : 'Off'"></ConfigValue>
        <ConfigValue v-for="(p, i) in placeholders" :key="i" label="Placeholder ID" :value="p"></ConfigValue>
    </ConfigCard>
</template>
<script>
import ConfigCard from './ConfigCard.vue';
import ConfigValue from './ConfigValue.vue';

export default {
    props: {
        firstItem: Object,
        firstAmount: Number,
        secondItem: Object,
        secondAmount: Number,
        placeholders: { type: Array, default: () => new Array(0, 0, 0) },
        visible: { type: Boolean, default: false }
    },
    computed: {
        usePlaceholders() {
            return this.placeholders.reduce((sum, val) => sum + val);
        }
    },
    components: { ConfigCard, ConfigValue }
}
</script>