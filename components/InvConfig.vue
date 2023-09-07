<template>
    <ConfigCard title="Inventory Config" :visible="visible">
        <ConfigValue label="Inventory OpCode" :value="opcode"></ConfigValue>
    </ConfigCard>
</template>
<script>
import ConfigCard from './ConfigCard.vue';

export default {
    props: {
        opcode: { type: Number, default: 0 },
        visible: { type: Boolean, default: false }
    },
    components: { ConfigCard }
}
</script>