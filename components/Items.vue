<template>
    <ConfigCard :title="label" visible>
        <b-form-select id="item" :value="value" @input="v => $emit('input', v)" :options="items">
            <template #first>
                <b-form-select-option :value="null" disabled>
                    -- Please select an option --
                </b-form-select-option>
            </template>
        </b-form-select>
    </ConfigCard>
</template>
<script>
import ConfigCard from './ConfigCard.vue';

export default {
    props: {
        label: { type: String, default: "Item" },
        items: Array,
        value: Object
    },
    components: { ConfigCard }
}
</script>