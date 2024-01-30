<template lang="">
  <v-card class="container">
    <v-toolbar color="#7B1FA2">
      <div class="content-container">
        <div class="add-btn-block">
          <app-button class="add-btn">Добавить позицию</app-button>
        </div>
      </div>
    </v-toolbar>

    <v-card
      class="position-card"
      v-for="position in this.positions"
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

          <v-icon icon="mdi-close"></v-icon>
        </div>

        <!-- TODO: сделать результат map :items computed -->
        <v-select class="select"
          label="Плательщик"
          :items="this.persons.map((p) => p.name)"
        ></v-select>

        <v-select class="select"
          :items="this.persons.map((p) => p.name)"
          chips
          label="Кто ел?"
          multiple
        ></v-select>
      </div>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      positions: [
        { id: 1, name: "borsch", price: 150 },
        { id: 2, name: "olivie", price: 250 },
        { id: 3, name: "shaurma", price: 190 },
        { id: 4, name: "krevetki", price: 350 },
        { id: 5, name: "chai", price: 95 },
      ],
      persons: [
        { id: 1, name: "Valera" },
        { id: 2, name: "Nikita" },
        { id: 3, name: "Mikhail" },
        { id: 4, name: "Anna" },
      ],
    };
  },

  mounted() {
    this.positions[0].payer = this.persons[0];
    this.positions[1].payer = this.persons[2];
    this.positions[2].payer = this.persons[3];
    this.positions[3].payer = this.persons[1];
    this.positions[4].payer = this.persons[3];
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

</style>
