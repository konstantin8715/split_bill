<template lang="">
  <v-card class="container">
    <v-toolbar color="#7B1FA2">
      <div class="content-container">
        <div class="add-btn-block">
          <app-button class="add-btn">Добавить позицию</app-button>
        </div>
      </div>
    </v-toolbar>

    <v-expansion-panels>
      <v-expansion-panel
        v-for="i in 3"
        :key="i"
        title="Item"
      >
      <v-expansion-panel-text>

          <app-input :type="'text'" class="position-name"></app-input> <br>
          <app-input :type="'number'" class="position-name"></app-input>

      </v-expansion-panel-text>
    </v-expansion-panel>
    </v-expansion-panels>

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
        width: 70%;;
    }    
}

@media (max-width: 320px) {
    .add-btn-block {
        width: 80%;;
    }    
}

.position-name {
    border-color: $dark-primary;
    color: $primary-text;
}
</style>
