<template>
  <div>
    <!-- Bank -->
    <b-form-group id="bank-group" label="Bank" label-for="bank">
      <b-form-select
        id="bank"
        v-model="bank"
        :options="$store.state.herblore.banks"
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
    <!-- Unstrung -->
    <template v-if="option === 'unstrung'">
      <!-- Log -->
      <b-form-group id="log-group" label="Log" label-for="log">
        <b-form-select id="log" v-model="log" :options="logs">
          <template #first>
            <b-form-select-option :value="null" disabled>
              -- Please select an option --
            </b-form-select-option>
          </template>
        </b-form-select>
      </b-form-group>
      <!-- Item -->
      <b-form-group id="item-group" label="Item" label-for="item">
        <b-form-select id="item" v-model="item" :options="items">
          <template #first>
            <b-form-select-option :value="null" disabled>
              -- Please select an option --
            </b-form-select-option>
          </template>
        </b-form-select>
      </b-form-group>
    </template>
    <!-- Strung -->
    <template v-else>
      <b-form-group id="item-group" label="Item" label-for="item">
        <b-form-select id="item" v-model="item" :options="unstrung">
          <template #first>
            <b-form-select-option :value="null" disabled>
              -- Please select an option --
            </b-form-select-option>
          </template>
        </b-form-select>
      </b-form-group>
    </template>
    <!-- Config -->
    <b-card id="general-config" class="mb-3">
      <template #header>
        <h5 class="mb-0">General Config</h5>
      </template>
      <p>Type: {{ type }}</p>
      <p>First Item ID: {{ first }}</p>
      <p>First Amount: {{ firstAmount }}</p>
      <p v-if="!second">Tool ID: {{ $store.state.fletching.knife }}</p>
      <template v-else>
        <p>Second Item ID: {{ second }}</p>
        <p>Second Amount: {{ secondAmount }}</p>
      </template>

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
      log: null,
      strung: false,
      hardwood: false,
      option: "unstrung",
      options: [
        { text: "Unstrung", value: "unstrung" },
        { text: "Strung", value: "strung" },
      ],
    };
  },
  computed: {
    logs() {
      return this.sort(this.$store.state.fletching.logs);
    },
    items() {
      if (!this.log) return [];
      let items = this.log.uniqueItems
        ? this.log.uniqueItems
        : this.$store.state.fletching.items;
      return items.map((e, i) => ({
        text: e,
        value: parseInt(this.$store.state.fletching.startParam) + i,
      }));
    },
    unstrung() {
      return this.sort(this.$store.state.fletching.unstrung);
    },
    type() {
      return this.option === "unstrung"
        ? "Use Tool On Item"
        : "Use Item On Item";
    },
    first() {
      if (this.option === "unstrung") return this.log ? this.log.id : 0;
      else return this.item ? this.item.id : 0;
    },
    second() {
      if (this.option === "unstrung") return this.item ? this.item.id : 0;
      else return this.$store.state.fletching.bowstring;
    },
    firstAmount() {
      return this.option === "unstrung" ? 27 : 14;
    },
    secondAmount() {
      return this.option === "unstrung" ? 0 : 14;
    },
    param() {
      if (this.option === "unstrung") return this.item ? this.item : 0;
      else return this.$store.state.fletching.startParam;
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