<template>
  <div>
    <!-- <div class="mb-3">
      <b-icon icon="info-circle" variant="primary" font-scale="1.2"> </b-icon>
      You may need to change the first item amount to a multiple of the number
      of bars it take to make the item you want to smith. For example, since
      platebodies take 5 bars, you would set the first item amount to 25 (5*5).
      I am working on a fix for this so that it auto calculates.
    </div> -->
    <b-form-group id="bank-group" label="Bank" label-for="bank">
      <b-form-select id="bank" v-model="bank" :options="smithing.banks">
        <template #first>
          <b-form-select-option :value="null" disabled>
            -- Please select an option --
          </b-form-select-option>
        </template>
      </b-form-select>
    </b-form-group>
    <b-form-group id="bar-group" label="Bar" label-for="bar">
      <b-form-select id="bar" v-model="bar" :options="smithing.bars">
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
      <p>First Item ID: {{ bar ? bar.id : 0 }}</p>
      <p>First Amount: {{ firstAmount }}</p>
      <p>Second Item ID: 0</p>
      <p>Second Amount: 0</p>
      <p>Object ID: {{ bank ? bank.obj : 0 }}</p>
      <p>Use Placeholders: On</p>
      <p>Placeholder ID: 2347</p>
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
      <p>Menu Param1: {{ item ? item.param : 0 }}</p>
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
      bank: null,
      bar: null,
      item: null,
    };
  },
  computed: {
    smithing() {
      return this.$store.state.smithing;
    },
    items() {
      let items = [];
      for (let i in this.smithing.items) {
        let item = this.smithing.items[i];
        let param = parseInt(this.smithing.startParam) + parseInt(i);
        if (this.bar && param in this.bar.uniqueItems) {
          item = this.bar.uniqueItems[param];
        }
        if (item) {
          items.push({
            text: item[0],
            value: { param: param, bars: item[1] },
          });
        }
      }
      return items;
    },
    firstAmount() {
      return this.item ? Math.floor(27 / this.item.bars) * this.item.bars : 0;
    },
  },
};
</script>