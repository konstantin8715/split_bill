<template lang="">
  <v-card class="container">
    <v-toolbar color="#7B1FA2"> </v-toolbar>
    <div class="content-container">
      <div v-for="(debt, i) in this.debtsStore.debts"
        :key="i" class="debts-container d-flex justify-space-between">
          <div>{{ debt.from.name }}</div>
          <div class="d-flex flex-column">
              <div>{{ debt.sum }}</div>
              <img src="https://freesvg.org/img/arrowright.png" width="50px" height="25px">
          </div>
          <div>{{ debt.to.name }}</div>
      </div>
    </div>
  </v-card>

</template>

<script>
import { useDebtsStore } from "../stores/DebtsStore.js";
import { usePositionsStore } from "../stores/PositionsStore.js";

export default {
  data() {
    return {
      debtsStore: useDebtsStore(),
      positionsStore: usePositionsStore(),
    };
  },

  mounted() {
    if (!this.positionsStore.hasPositions || this.positionsStore.hasEmptyData) {
      this.$router.push("calculate");
    }
  },
};
</script>

<style scoped lang="scss"></style>
