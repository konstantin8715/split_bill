<template>
  <v-card class="container">
    <v-toolbar color="#7B1FA2"> </v-toolbar>
    <div class="content-container">
      <div
        v-if="this.debtsStore.hasDebts"
        v-for="debt in this.debtsStore.debts"
        :key="debt.id"
        class="debts-container"
      >
        <div
          class="px-6 d-flex justify-space-between align-center mt-4 info-text"
        >
          <div class="w-25">
            <span class="info-text">
              {{ debt.from.name }}
            </span>
          </div>

          <div class="d-flex flex-column align-center w-25 mt-4 info-text">
            <div>
              <span class="info-text">
                {{ debt.sum }}
              </span>
            </div>
            <img
              src="https://freesvg.org/img/arrowright.png"
              width="80px"
              height="30px"
            />
          </div>

          <div class="w-25 text-right info-text">
            <span class="info-text">
              {{ debt.to.name }}
            </span>
          </div>
        </div>
      </div>
      <div v-else class="mt-4 text-center">
        <span class="info-text">Никто никому ничего не должен!</span>
      </div>
      <div class="w-50 mt-4 ma-auto text-center">
        <app-button @click="reset">Начать сначала</app-button>
      </div>
      <div class="w-50 mt-4 mb-4 ma-auto text-center">
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
@import "../colors";
.debts-container {
  border-radius: 10px;
  background: $light-primary;
}
</style>
