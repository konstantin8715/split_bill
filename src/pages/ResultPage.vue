<template lang="">
  <v-card class="container">
    <v-toolbar color="#7B1FA2"> </v-toolbar>
    <div class="content-container">
      <div
        v-if="this.debtsStore.hasDebts"
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
      <div v-else class="info-message">
        <app-info-text>Никто никому ничего не должен!</app-info-text>
      </div>
      <div class="navigate-btn">
        <app-button @click="reset">Начать сначала</app-button>
      </div>
      <div class="navigate-btn info-message">
        <app-button @click="back">Назад</app-button>
      </div>
    </div>
  </v-card>
</template>

<script>
import { useDebtsStore } from "../stores/DebtsStore.js";
import { usePersonsStore } from "../stores/PersonsStore.js";
import { usePositionsStore } from "../stores/PositionsStore.js";

export default {
  data() {
    return {
      debtsStore: useDebtsStore(),
      personsStore: usePersonsStore(),
      positionsStore: usePositionsStore(),
    };
  },

  mounted() {
    // Метод сделан так тупо, потому что this.positionsStore.hasEmptyData
    // очень ресурсоемкая операция
    this.positionsStore.loadPositions();
    if (this.positionsStore.hasPositions) {
      if (!this.positionsStore.hasEmptyData) {
        this.debtsStore.calculateDebts();
      } else {
        this.$router.push("addpositions");
      }
    } else {
      this.$router.push("addpositions");
    }
  },

  methods: {
    reset() {
      this.debtsStore.$reset();
      this.personsStore.$reset();
      this.positionsStore.$reset();
      sessionStorage.clear();
      this.$router.push("/");
    },

    back() {
      this.$router.push("addpositions");
    },
  },
};
</script>

<style scoped lang="scss">
.info-message {
  margin-top: 15px;
  text-align: center;
}

.navigate-btn {
  width: 50%;
  margin: 0 auto;
  margin-bottom: 15px;
}
</style>
