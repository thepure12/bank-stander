<template>
    <b-card id="bank-config" class="mb-3">
        <template #header>
            <h5 class="mb-0">Bank Config</h5>
        </template>
        <p>Bank Type: {{ bank ? bank.type : "Npc" }}</p>
        <p>Bank ID: {{ bank ? bank.id : 0 }}</p>
        <p>Bank Op Code: {{ bank ? bank.opCode : 0 }}</p>
    </b-card>
</template>
<script>
export default {
    props: {
        bank: Object
    }
}
</script>