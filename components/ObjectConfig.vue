<template>
    <b-card id="object-config" class="mb-3">
        <template #header>
            <h5 class="mb-0">Object Config</h5>
        </template>
        <p>Object ID: {{ bank ? bank.obj : 0 }}</p>
    </b-card>
</template>
<script>
export default {
    props: {
        bank: Object
    }
}
</script>