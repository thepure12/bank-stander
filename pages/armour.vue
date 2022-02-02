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
    <!-- Materials -->
    <b-form-group id="mats-group" label="Materials" label-for="mat">
      <b-form-select id="mat" v-model="mat" :options="mats">
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
    <p class="h5 text-success my-3">**Start with needle and thread in inventory.</p>
    <!-- Config -->
    <b-card id="general-config" class="mb-3">
      <template #header>
        <h5 class="mb-0">General Config</h5>
      </template>
      <p>Type: Use Tool On Item</p>
      <p>First Item ID: {{ first }}</p>
      <p>First Amount: 26</p>
      <p>Use Placeholders: On</p>
      <p>Placeholder ID: {{ $store.state.armour.thread }}</p>
      <!-- TODO add placeholder -->
      <p>Tool ID: {{ $store.state.armour.needle }}</p>
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
      bank: null,
      item: null,
      mat: null,
    };
  },
  computed: {
    mats() {
      return this.sort(this.$store.state.armour.mats);
    },
    items() {
      if (!this.mat) return [];
      return this.mat.items.map((e, i) => ({
        text: e,
        value: parseInt(this.$store.state.armour.startParam) + i,
      }));
    },
    first() {
      return this.mat ? this.mat.id : 0;
    },
    param() {
      return this.item ? this.item : 0;
    },
  },
  methods: {
    sort(list) {
      return Object.entries(list)
        .sort((a, b) => {
          a = a[0].toUpperCase();
          b = b[0].toUpperCase();
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        })
        .map((i) => ({ text: i[0], value: i[1] }));
    },
  },
};
</script>
</script>