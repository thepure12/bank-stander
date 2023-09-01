<template>
    <ConfigCard title="General Config">
        <p>Type: {{ types[type] }}</p>
    </ConfigCard>
</template>
<script>
import ConfigCard from './ConfigCard.vue';

export default {
    props: {
        type: { type: Number, default: 0 }
    },
    data() {
        return {
            types: [
                "Use Item on Item",
                "Use Tool on Item",
                "Use Item",
                "Use Item on Object",
                "Cast Spell",
                "Use Spell on Item",
            ]
        };
    },
    components: { ConfigCard }
}
</script>