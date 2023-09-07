<template>
    <ConfigCard title="Object Config" :visible="visible">
        <ConfigValue label="Object ID" :value="bank ? bank.obj : 0"></ConfigValue>
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