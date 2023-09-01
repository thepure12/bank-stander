<template>
    <ConfigCard title="Menu Config">
        <p>Menu OpCode: {{ opcode }}</p>
        <p>Menu Param1: {{ param }}</p>
    </ConfigCard>
</template>
<script>
import ConfigCard from './ConfigCard.vue';

export default {
    props: {
        opcode: Number,
        param: Number
    },
    components: { ConfigCard }
}
</script>