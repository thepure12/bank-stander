<template>
  <div>
    <h6>Diving Potions Coming Soon</h6>
    <!-- Banks -->
    <b-form-group id="bank-group" label="Bank" label-for="bank">
      <b-form-select id="bank" v-model="bank" :options="banks">
        <template #first>
          <b-form-select-option :value="null" disabled>
            -- Please select an option --
          </b-form-select-option>
        </template>
      </b-form-select>
    </b-form-group>
    <!-- Herbs -->
    <b-form-group
      v-if="action === 'clean'"
      id="herb-group"
      label="Herbs"
      label-for="potions"
    >
      <b-form-select id="herb" v-model="herb" :options="herbs">
        <template #first>
          <b-form-select-option :value="null" disabled>
            -- Please select an option --
          </b-form-select-option>
        </template>
      </b-form-select>
    </b-form-group>
    <!-- Potions -->
    <b-form-group v-else id="potions-group" label="Potions" label-for="potions">
      <b-form-select
        id="potions"
        v-model="potion"
        :options="selections"
        @change="potionSelected"
      >
        <template #first>
          <b-form-select-option :value="null" disabled>
            -- Please select an option --
          </b-form-select-option>
        </template>
      </b-form-select>
      <div v-if="stackable" class="text-primary font-weight-bold mt-2">
        <b-icon icon="info-circle"></b-icon>
        <i>
          This is made with a stackable ingredient, keep the full stack in your
          invetory.
        </i>
      </div>
    </b-form-group>
    <!-- Action -->
    <b-form-group>
      <b-form-radio-group
        v-model="action"
        :options="options"
        @change="
          potion = null;
          herb = null;
        "
      >
      </b-form-radio-group>
    </b-form-group>
    <!-- Config -->
    <b-card id="general-config" class="mb-3">
      <template #header>
        <h5 class="mb-0">General Config</h5>
      </template>
      <p>Type: {{ type }}</p>
      <p>First Item ID: {{ first }}</p>
      <p>First Amount: {{ firstAmount }}</p>
      <template v-if="action !== 'clean' && !stackable">
        <p>Second Item ID: {{ second }}</p>
        <p>Second Amount: {{ secondAmount }}</p>
      </template>
      <p v-if="stackable">Tool ID: {{ toolId }}</p>
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
import { BIcon, BIconInfoCircle } from "bootstrap-vue";
export default {
  components: {
    BIcon,
    BIconInfoCircle,
  },
  data() {
    return {
      potion: null,
      herb: null,
      options: [
        { text: "Potion", value: "pot" },
        { text: "Unfinished", value: "unf" },
        { text: "Tar", value: "tar" },
        { text: "Clean Herb", value: "clean" },
      ],
      action: "pot",
      bank: null,
    };
  },
  computed: {
    banks() {
      return this.$store.state.banks;
    },
    herbs() {
      return this.sortSelections(this.$store.state.herblore.herbs);
    },
    finished() {
      return this.sortSelections(this.$store.state.herblore.finished);
    },
    unfinished() {
      return this.sortSelections(this.$store.state.herblore.unfinished);
    },
    tar() {
      return this.sortSelections(this.$store.state.herblore.tar);
    },
    selections() {
      return {
        pot: this.finished,
        unf: this.unfinished,
        tar: this.tar,
      }[this.action];
    },
    stackable() {
      return (this.potion && this.potion.stackable) || this.action === "tar";
    },
    type() {
      if (this.action === "clean") return "Use Item";
      if (this.stackable) return "Use Tool On Item";
      return "Use Item On Item";
    },
    first() {
      if (this.potion) return this.potion.first;
      else if (this.herb) return this.herb;
      return 0;
    },
    second() {
      if (this.potion && !this.stackable) return this.potion.second;
      return 0;
    },
    firstAmount() {
      if (this.action === "tar" || this.stackable) return 27;
      if (this.action === "clean") return 28;
      return 14;
    },
    secondAmount() {
      if (this.action === "tar") return 27 * 15;
      if (this.action === "clean") return 28;
      if (this.stackable) return 0;
      return 14;
    },
    toolId() {
      if (this.potion && this.stackable) return this.potion.second;
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