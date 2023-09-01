<template>
    <ConfigCard title="Bank Config">
        <p>Bank Type: {{ bank ? bank.type : "Npc" }}</p>
        <p>Bank ID: {{ bank ? bank.id : 0 }}</p>
        <p>Bank Op Code: {{ bank ? bank.opCode : 0 }}</p>
    </ConfigCard>
</template>
<script>
import ConfigCard from './ConfigCard.vue';

export default {
    props: {
        bank: Object
    },
    components: { ConfigCard }
}
</script>