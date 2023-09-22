<template>
  <div>
    <!-- Bank -->
    <b-form-group id="bank-group" label="Bank" label-for="bank">
      <b-form-select
        id="bank"
        v-model="bank"
        :options="$store.state.jewellry.banks"
      >
        <template #first>
          <b-form-select-option :value="null" disabled>
            -- Please select an option --
          </b-form-select-option>
        </template>
      </b-form-select>
    </b-form-group>
    <!-- Bar -->
    <b-form-group id="bar-group" label="Bar" label-for="bar">
      <b-form-select id="bar" v-model="bar" :options="bars">
        <template #first>
          <b-form-select-option :value="null" disabled>
            -- Please select an option --
          </b-form-select-option>
        </template>
      </b-form-select>
    </b-form-group>
    <!-- Gem -->
    <b-form-group id="gem-group" label="Gem" label-for="gem">
      <b-form-select id="gem" v-model="gem" :options="gems">
        <template #first>
          <b-form-select-option :value="null">
            -- None --
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
      <p>Type: Use Item On Object</p>
      <p>First Item ID: {{ first }}</p>
      <p>First Amount: {{ firstAmount }}</p>
      <p>Second Item ID: {{ second }}</p>
      <p>Second Amount: {{ secondAmount }}</p>
      <p>Object ID: {{ object }}</p>
      <p>Use Placeholders: On</p>
      <p>Placeholder ID: {{ placeholder }}</p>
      <p>Placeholder ID: 0</p>
      <p>Placeholder ID: 0</p>
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
      bar: null,
      gem: null,
      item: null,
      bank: null,
    };
  },
  computed: {
    bars() {
      return Object.entries(this.$store.state.jewellry.bars).map((x) => ({
        text: x[0],
        value: x[1],
      }));
    },
    gems() {
      if (this.bar)
        return Object.entries(this.bar.gems).map((x) => ({
          text: x[0],
          value: x[1],
        }));
    },
    items() {
      return Object.entries(this.$store.state.jewellry.items).map((x) => ({
        text: x[0],
        value: x[1],
      }));
    },
    first() {
      return this.bar ? this.bar.id : 0;
    },
    second() {
      return this.gem ? this.gem : 0;
    },
    firstAmount() {
      return this.gem ? 13 : 27;
    },
    secondAmount() {
      return this.gem ? 13 : 0;
    },
    object() {
      return this.bank ? this.bank.obj : 0;
    },
    placeholder() {
      return this.item ? this.item.mould : 0;
    },
    param() {
      if (!this.bar || !this.item) return 0;
      if (!this.gem) return this.bar.startParam[this.item.mould];
      for (let i in this.gems) {
        if (this.gems[i].value == this.gem) {
          let offset = this.item.mould == 11065 ? 2 : 1;
          return (
            parseInt(this.bar.startParam[this.item.mould]) +
            parseInt(i) +
            parseInt(offset)
          );
        }
      }
    },
  },
  methods: {},
};
</script>