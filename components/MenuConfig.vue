<template>
    <b-card id="menu-config" class="mb-3">
        <template #header>
            <h5 class="mb-0">Menu Config</h5>
        </template>
        <p>Menu OpCode: {{ opcode }}</p>
        <p>Menu Param1: {{ param }}</p>
    </b-card>
</template>
<script>
export default {
    props: {
        opcode: Number,
        param: Number
    }
}
</script>