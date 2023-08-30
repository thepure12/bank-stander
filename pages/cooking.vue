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
    <!-- Config -->
    <b-card id="general-config" class="mb-3">
      <template #header>
        <h5 class="mb-0">General Config</h5>
      </template>
      <p>Type: Use Item On Object</p>
    </b-card>
    <ItemConfig :firstItem="item" :firstAmount="28"></ItemConfig>
    <!-- <b-card id="item-config" class="mb-3">
      <template #header>
        <h5 class="mb-0">Item Config</h5>
      </template>
      <p>First Item ID: {{ item ? item.id : 0 }}</p>
      <p>First Amount: {{ firstAmount }}</p>
      <p>Use Second Item: Off</p>
      <p>Second/Tool ID: 0</p>
      <p>Second/Tool Amount: 0</p>
      <p>Use Placeholders: Off</p>
      <p>Placeholder ID: 0</p>
      <p>Placeholder ID: 0</p>
      <p>Placeholder ID: 0</p>
    </b-card> -->
    <b-card id="object-config" class="mb-3">
      <template #header>
        <h5 class="mb-0">Object Config</h5>
      </template>
      <p>Object ID: {{ bank ? bank.obj : 0 }}</p>
    </b-card>
    <b-card id="bank-config" class="mb-3">
      <template #header>
        <h5 class="mb-0">Bank Config</h5>
      </template>
      <p>Bank Type: {{ bank ? bank.type : "Npc" }}</p>
      <p>Bank ID: {{ bank ? bank.id : 0 }}</p>
      <p>Bank Op Code: {{ bank ? bank.opCode : 0 }}</p>
    </b-card>
    <b-card id="menu-config" class="mb-3">
      <template #header>
        <h5 class="mb-0">Menu Config</h5>
      </template>
      <p>Menu OpCode: 57</p>
      <p>Menu Param1: 17694734</p>
    </b-card>
    <b-card id="inv-config" class="mb-3">
      <template #header>
        <h5 class="mb-0">Inventory Config</h5>
      </template>
      <p>Inventory OpCode: 0</p>
    </b-card>
  </div>
</template>
<script>
import { BIcon, BIconInfoCircle } from "bootstrap-vue";
import ItemConfig from "~/components/ItemConfig.vue";
export default {
  components: {
    BIcon,
    BIconInfoCircle,
    ItemConfig
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