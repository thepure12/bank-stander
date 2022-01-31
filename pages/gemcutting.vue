<template>
  <div>
    <!-- Bank -->
    <b-form-group id="bank-group" label="Bank" label-for="bank">
      <b-form-select
        id="bank"
        v-model="bank"
        :options="$store.state.banks"
      >
        <template #first>
          <b-form-select-option :value="null" disabled>
            -- Please select an option --
          </b-form-select-option>
        </template>
      </b-form-select>
    </b-form-group>
    <!-- Strung/Untrung -->
    <b-form-group>
      <b-form-radio-group
        v-model="option"
        :options="options"
        @change="item = null"
      >
      </b-form-radio-group>
    </b-form-group>
      <!-- Gem -->
    <b-form-group id="gem-group" label="Gem" label-for="gem">
      <b-form-select id="gem" v-model="gem" :options="gems">
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
      <p>First Item ID: {{ gem }}</p>
      <p>First Amount: 27</p>
      <p>Tool ID: {{ $store.state.gemcutting.chisel }}</p>
      <p>Use Placeholders: Off</p>
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
      <p>Menu Param1: {{ $store.state.gemcutting.param }}</p>
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
      gem: null,
      strung: false,
    };
  },
  computed: {
    gems() {
      return this.sort(this.$store.state.gemcutting.gems);
    }
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