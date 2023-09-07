<template>
    <ConfigCard :title="label" :visible="visible">
        <b-form-select id="bank" :value="value" @input="v => $emit('input', v)" :options="banks">
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
        label: { type: String, default: "Bank" },
        banks: Array,
        value: Object,
        visible: { type: Boolean, default: true }
    },
    components: { ConfigCard }
}
</script>