<template>
    <ConfigCard title="Object Config">
        <p>Object ID: {{ bank ? bank.obj : 0 }}</p>
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