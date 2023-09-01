<template>
    <ConfigCard title="Inventory Config">
        <p>Inventory OpCode: {{ opcode }}</p>
    </ConfigCard>
</template>
<script>
import ConfigCard from './ConfigCard.vue';

export default {
    props: {
        opcode: { type: Number, default: 0 }
    },
    components: { ConfigCard }
}
</script>