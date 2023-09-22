<template>
  <div>
    <!-- Bank -->
    <b-form-group id="bank-group" label="Bank" label-for="bank">
      <b-form-select id="bank" v-model="bank" :options="$store.state.banks">
        <template #first>
          <b-form-select-option :value="null" disabled>
            -- Please select an option --
          </b-form-select-option>
        </template>
      </b-form-select>
    </b-form-group>
    <!-- Items -->
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
      <p>Type: Use Tool On Item</p>
      <p>First Item ID: {{ first }}</p>
      <p>First Amount: {{ firstAmount }}</p>
      <p>Use Placeholders: Off</p>
      <p>Tool ID: {{ tool }}</p>
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
      <p>Menu Param1: {{ param }}</p>
      <p>Left Click Object: On</p>
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
export default {
  data() {
    return {
      item: null,
      bank: null,
    };
  },
  computed: {
    items() {
      return Object.entries(this.$store.state.glassblowing.items).map((x) => ({
        text: x[1],
        value:
          parseInt(this.$store.state.glassblowing.startParam) + parseInt(x[0]),
      }));
    },
    first() {
      return this.$store.state.glassblowing.moltenGlass;
    },
    second() {
      return 0;
    },
    firstAmount() {
      return 27;
    },
    secondAmount() {
      return 0;
    },
    tool() {
      return this.$store.state.glassblowing.pipe;
    },
    object() {
      return this.bank ? this.bank.obj : 0;
    },
    placeholder() {
      return this.item ? this.item.mould : 0;
    },
    param() {
      return this.item ? this.item : 0;
    },
  },
  methods: {},
};
</script>