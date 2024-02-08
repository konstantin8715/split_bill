<template lang="">
  <v-card class="container">
    <v-toolbar color="#7B1FA2">
      <div class="content-container">
        <div class="add-btn-block">
          <app-button @click="this.positionsStore.addPosition" class="add-btn"
            >Добавить позицию</app-button
          >
        </div>
      </div>
    </v-toolbar>

    <position-cards
      :positions="this.positionsStore.positions"
      :persons="this.personsStore.persons"
      @delete="this.positionsStore.deletePosition"
    />

    <div class="content-container">
      <div
        v-if="this.positionsStore.hasPositions"
        class="ma-auto mb-4 w-50 mt-4"
      >
        <div class="text-center" v-if="this.positionsStore.hasEmptyData">
          <app-info-text>Заполните все поля</app-info-text>
        </div>
        <app-button v-else @click="enter">Дальше</app-button>
      </div>
      <div v-else class="text-center">
        <app-info-text>Введите 1 или более позиций</app-info-text>
      </div>
      <div class="ma-auto mb-4 w-50">
        <app-button @click="back">Назад</app-button>
      </div>
    </div>
  </v-card>

  <div
    style="display: none"
    v-for="position in this.positionsStore.positions"
    :key="position.id"
  >
    {{ JSON.stringify(position) }}
  </div>
</template>

<script>
import { usePositionsStore } from "../stores/PositionsStore.js";
import { usePersonsStore } from "../stores/PersonsStore.js";
import { useDebtsStore } from "../stores/DebtsStore.js";
import PositionCards from "../components/PositionCards.vue";

export default {
  components: { PositionCards },
  data() {
    return {
      positionsStore: usePositionsStore(),
      personsStore: usePersonsStore(),
      debtsStore: useDebtsStore(),
    };
  },

  methods: {
    enter() {
      this.$router.push("result");
    },

    back() {
      this.$router.push("addpersons");
    },
  },

  mounted() {
    this.personsStore.loadPersons();
    if (!this.personsStore.hasPersons) {
      this.$router.push("addpersons");
    } else {
      this.positionsStore.loadPositions();
    }
  },

  updated() {
    this.positionsStore.saveCurrentPositions();
  },
};
</script>

<style scoped lang="scss">
@import "../colors";

.add-btn {
  background: $light-primary !important;
  color: $dark-primary !important;
}

.add-btn-block {
  margin: 0 auto;
  width: 50%;
}

@media (max-width: 432px) {
  .add-btn-block {
    width: 70%;
  }
}

@media (max-width: 320px) {
  .add-btn-block {
    width: 80%;
  }
}

.position-card {
  width: 97%;
  height: 200px;
  margin: 0 auto;
  background: $light-primary;
  margin-top: 5px;
}

.position-name,
.position-price {
  border-color: $dark-primary !important;
  color: $primary-text !important;
}

.position-data-row {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  .position-data {
    .position-name,
    .position-price {
      border: 2px solid $dark-primary;
      border-radius: 5px;
      text-align: center;
      color: $primary-text;
      outline: none;
      font-size: 20px;
    }

    .position-name {
      width: 200px;
    }

    .position-price {
      margin-left: 10px;
      width: 100px;
    }
  }
}

.select {
  height: 75px;
}

.navigate-btn {
  width: 50%;
  margin: 0 auto;
  margin-bottom: 15px;
}

.info-message {
  margin-top: 15px;
  text-align: center;
}
</style>
