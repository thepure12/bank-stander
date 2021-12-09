<template>
  <div>
    <h6>Still Adding Potions</h6>
    <b-form-group id="bank-group" label="Bank" label-for="bank">
      <b-form-select id="bank" v-model="bank" :options="banks"></b-form-select>
    </b-form-group>
    <b-form-group id="potions-group" label="Potions" label-for="potions">
      <b-form-select
        id="potions"
        v-model="potion"
        :options="selections"
        @change="potionSelected"
      ></b-form-select>
    </b-form-group>
    <b-form-group>
      <b-form-radio-group v-model="type" :options="options">
        <!-- <b-form-checkbox value="pot">Potion</b-form-checkbox>
        <b-form-checkbox value="unf">Unfinished</b-form-checkbox>
        <b-form-checkbox value="tar">Tar</b-form-checkbox> -->
      </b-form-radio-group>
    </b-form-group>
    <!-- Config -->
    <b-card id="general-config" class="mb-3">
      <template #header>
        <h5 class="mb-0">General Config</h5>
      </template>
      <p>Type: Use Item On Item</p>
      <p>First Item ID: {{ first }}</p>
      <p>First Amount: {{ firstAmount }}</p>
      <p>Second Item ID: {{ second }}</p>
      <p>Second Amount: {{ secondAmount }}</p>
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
export default {
  data() {
    return {
      potion: null,
      options: [
        { text: "Potion", value: "pot" },
        { text: "Unfinished", value: "unf" },
        { text: "Tar", value: "tar" },
      ],
      type: "pot",
      bank: null,
    };
  },
  computed: {
    banks() {
      return this.$store.state.potions.banks;
    },
    finished() {
      return this.sortSelections(this.$store.state.potions.finished);
    },
    unfinished() {
      return this.sortSelections(this.$store.state.potions.unfinished);
    },
    tar() {
      return this.sortSelections(this.$store.state.potions.tar);
    },
    selections() {
      return {
        pot: this.finished,
        unf: this.unfinished,
        tar: this.tar,
      }[this.type];
    },
    first() {
      if (!this.potion) return 0;
      return this.potion.first;
    },
    second() {
      if (!this.potion) return 0;
      return this.potion.second;
    },
    firstAmount() {
      return this.type === "tar" ? 27 : 14;
    },
    secondAmount() {
      return this.type === "tar" ? 27 * 15 : 14;
    },
  },
  methods: {
    sortSelections(selections) {
      return Object.entries(selections)
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
        .map((pot) => ({
          text: pot[0],
          value: pot[1],
        }));
    },
    potionSelected() {
      if (!this.potion.secondary) this.unfinished = false;
    },
  },
};
</script>