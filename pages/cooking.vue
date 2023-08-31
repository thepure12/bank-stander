<template>
  <div>
    <b-form-group id="bank-group" label="Bank" label-for="bank">
      <b-form-select id="bank" v-model="bank" :options="cooking.banks">
        <template #first>
          <b-form-select-option :value="null" disabled>
            -- Please select an option --
          </b-form-select-option>
        </template>
      </b-form-select>
    </b-form-group>
    <b-form-group id="item-group" label="Item" label-for="item">
      <b-form-select id="item" v-model="item" :options="items">
        <template #first>
          <b-form-select-option :value="null" disabled>
            -- Please select an option --
          </b-form-select-option>
        </template>
      </b-form-select>
    </b-form-group>
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
import GeneralConfig from "~/components/GeneralConfig.vue";
import InvConfig from "~/components/InvConfig.vue";
import ItemConfig from "~/components/ItemConfig.vue";
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
    GeneralConfig
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