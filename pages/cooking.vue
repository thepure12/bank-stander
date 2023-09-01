<template>
  <div>
    <Banks v-model="bank" :banks="cooking.banks"></Banks>
    <Items v-model="item" :items="items"></Items>
    <GeneralConfig :type="3"></GeneralConfig>
    <ItemConfig :firstItem="item" :firstAmount="28"></ItemConfig>
    <ObjectConfig :bank="bank"></ObjectConfig>
    <BankConfig :bank="bank"></BankConfig>
    <MenuConfig :opcode="57" :param="17694734"></MenuConfig>
    <InvConfig></InvConfig>
  </div>
</template>
<script>
import { BIcon, BIconInfoCircle } from "bootstrap-vue";
import BankConfig from "~/components/BankConfig.vue";
import Banks from "~/components/Banks.vue";
import GeneralConfig from "~/components/GeneralConfig.vue";
import InvConfig from "~/components/InvConfig.vue";
import ItemConfig from "~/components/ItemConfig.vue";
import Items from "~/components/Items.vue";
import MenuConfig from "~/components/MenuConfig.vue";
import ObjectConfig from "~/components/ObjectConfig.vue";
export default {
  components: {
    BIcon,
    BIconInfoCircle,
    ItemConfig,
    BankConfig,
    MenuConfig,
    ObjectConfig,
    InvConfig,
    GeneralConfig,
    Banks,
    Items
  },
  data() {
    return {
      bank: null,
      item: null,
    };
  },
  computed: {
    cooking() {
      return this.$store.state.cooking;
    },
    items() {
      return Object.entries(this.cooking.items)
        .map(([k, v]) => {
          return { text: k, value: v }
        })
    },
    firstAmount() {
      return 28
    },
  },
};
</script>