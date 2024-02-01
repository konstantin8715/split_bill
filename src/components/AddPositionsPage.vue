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

    <v-card
      class="position-card"
      v-for="position in this.positionsStore.positions"
      :key="position.id"
    >
      <div class="content-container">
        <div class="position-data-row">
          <div class="position-data">
            <input
              type="text"
              class="position-name"
              v-model="position.name"
              placeholder="Название"
            />
            <input
              type="number"
              class="position-price"
              v-model="position.price"
              placeholder="Цена"
            />
          </div>

          <v-icon
            @click="this.positionsStore.deletePosition(position)"
            icon="mdi-close"
          ></v-icon>
        </div>

        <!-- TODO: сделать результат map :items computed -->
        <v-select
          class="select"
          v-model="position.payer"
          label="Плательщик"
          :items="this.personsStore.persons"
          return-object
          item-title="name"
        ></v-select>

        <v-select
          class="select"
          v-model="position.persons"
          :items="this.personsStore.persons"
          return-object
          item-title="name"
          chips
          label="Кто ел?"
          multiple
        ></v-select>
      </div>
    </v-card>

    <div v-if="this.positionsStore.hasPositions" class="enter-btn info-message">
      <div v-if="this.positionsStore.hasEmptyData" class="info-message">Заполните все поля</div>
      <app-button v-else @click="enter">Дальше</app-button>
    </div>
    <div v-else class="info-message">Введите 1 или более позиций</div>
  </v-card>

  <div v-for="position in this.positionsStore.positions" :key="position.id">
    {{ JSON.stringify(position) }}
  </div>
</template>

<script>
import { usePositionsStore } from "../stores/PositionsStore.js";
import { usePersonsStore } from "../stores/PersonsStore.js";
import { useDebtsStore } from "../stores/DebtsStore.js";

export default {
  data() {
    return {
      positionsStore: usePositionsStore(),
      personsStore: usePersonsStore(),
      debtsStore: useDebtsStore(),
    };
  },

  beforeMount() {
    if (!this.personsStore.hasPersons) {
      this.$router.push("addusers");
    }
  },

  methods: {
    enter() {
      this.debtsStore.calculateDebts();
      this.$router.push("result");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../colors";

.add-btn-block {
  margin: 0 auto;
  width: 50%;
}

.add-btn {
  background: $light-primary !important;
  color: $dark-primary !important;
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

.enter-btn {
  width: 50%;
  margin: 0 auto;
  margin-bottom: 15px;
}

.info-message {
  margin-top: 15px;
  text-align: center;
}
</style>
