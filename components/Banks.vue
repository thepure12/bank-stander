<template>
    <b-form-group id="bank-group" :label="label" label-for="bank">
        <b-form-select id="bank" :value="value" @input="v => $emit('input', v)" :options="banks">
            <template #first>
                <b-form-select-option :value="null" disabled>
                    -- Please select an option --
                </b-form-select-option>
            </template>
        </b-form-select>
    </b-form-group>
</template>
<script>
export default {
    props: {
        label: { type: String, default: "Bank" },
        banks: Array,
        value: Object
    }
}
</script>