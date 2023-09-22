<template>
    <div>
        <h5 class="text-warning">Warning: Does not auto eat!</h5>
        <Banks v-model="bank" label="NPC" :banks="combat.banks"></Banks>
        <GeneralConfig :type="3"></GeneralConfig>
        <ItemConfig></ItemConfig>
        <ObjectConfig></ObjectConfig>
        <BankConfig :bank="bank"></BankConfig>
        <MenuConfig :opcode="0" :param="0"></MenuConfig>
        <InvConfig></InvConfig>
    </div>
</template>
<script>
import BankConfig from '~/components/BankConfig.vue';
import Banks from '~/components/Banks.vue';
import ConfigCard from '~/components/ConfigCard.vue';
import GeneralConfig from '~/components/GeneralConfig.vue';
import InvConfig from '~/components/InvConfig.vue';
import ItemConfig from '~/components/ItemConfig.vue';
import MenuConfig from '~/components/MenuConfig.vue';
import ObjectConfig from '~/components/ObjectConfig.vue';

export default {
    components: { BankConfig, Banks, GeneralConfig, ItemConfig, ObjectConfig, BankConfig, MenuConfig, InvConfig, ConfigCard },
    data() {
        return {
            bank: null
        }
    },
    computed: {
        combat() {
            return this.$store.state.combat
        }
    }
}
</script>