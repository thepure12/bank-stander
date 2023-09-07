<template>
    <ConfigCard title="Bank Config" :visible="visible">
        <ConfigValue label="Bank Type" :value="bank ? bank.type : 'Npc'"></ConfigValue>
        <ConfigValue label="Bank ID" :value="bank ? bank.id : 0"></ConfigValue>
        <ConfigValue label="Bank Op Code" :value="bank ? bank.opCode : 0"></ConfigValue>
    </ConfigCard>
</template>
<script>
import ConfigCard from './ConfigCard.vue';

export default {
    props: {
        bank: Object,
        visible: { type: Boolean, default: false }
    },
    components: { ConfigCard }
}
</script>