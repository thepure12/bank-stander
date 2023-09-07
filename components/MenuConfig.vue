<template>
    <ConfigCard title="Menu Config" :visible="visible">
        <ConfigValue label="Menu OpCode" :value="opcode"></ConfigValue>
        <ConfigValue label="Menu Param1" :value="param"></ConfigValue>
    </ConfigCard>
</template>
<script>
import ConfigCard from './ConfigCard.vue';

export default {
    props: {
        opcode: Number,
        param: Number,
        visible: { type: Boolean, default: false }
    },
    components: { ConfigCard }
}
</script>