<template>
    <b-card id="general-config" class="mb-3">
        <template #header>
            <h5 class="mb-0">General Config</h5>
        </template>
        <p>Type: {{ types[type] }}</p>
    </b-card>
</template>
<script>
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
        }
    }
}
</script>