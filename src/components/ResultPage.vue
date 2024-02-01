<template lang="">
  <v-card class="container">
    <v-toolbar color="#7B1FA2"> </v-toolbar>
    <div class="content-container">
      <div
        v-for="(debt, i) in this.debtsStore.debts"
        :key="i"
        class="debts-container d-flex justify-space-between"
      >
        <div>{{ debt.from.name }}</div>

        <div class="d-flex flex-column align-center">
          <div>{{ debt.sum }}</div>
          <img
            src="https://freesvg.org/img/arrowright.png"
            width="50px"
            height="25px"
          />
        </div>

        <div>{{ debt.to.name }}</div>
      </div>
    </div>
  </v-card>
</template>

<script>
import { useDebtsStore } from "../stores/DebtsStore.js";

export default {
  data() {
    return {
      debtsStore: useDebtsStore(),
    };
  },

  beforeMount() {
    if (
      !this.debtsStore.positionsStore.hasPositions ||
      this.debtsStore.positionsStore.hasEmptyData
    ) {
      this.$router.push("addpositions");
    }
  },
};
</script>

<style scoped lang="scss"></style>
