<template>
    <b-card id="inv-config" class="mb-3">
        <template #header>
            <h5 class="mb-0">Inventory Config</h5>
        </template>
        <p>Inventory OpCode: {{ opcode }}</p>
    </b-card>
</template>
<script>
export default {
    props: {
        opcode: { type: Number, default: 0 }
    }
}
</script>