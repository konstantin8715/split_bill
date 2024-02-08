<template>
  <v-card
    class="position-card mt-2 ma-auto"
    v-for="position in positions"
    :key="position.id"
  >
    <div class="content-container">
      <div class="position-data-row">
        <div class="position-data">
          <app-input
            :type="'text'"
            v-model:value="position.name"
            :placeholder="'Название'"
            class="text-center card-input w-50"
          />
          <!-- <input
            type="text"
            class="position-name"
            v-model="position.name"
            placeholder="Название"
          /> -->
          <app-input
            :type="'number'"
            v-model:value="position.price"
            :placeholder="'Цена'"
            class="text-center card-input w-25 ml-10"
          />
          <!-- <input
            type="number"
            class="position-price"
            v-model="position.price"
            placeholder="Цена"
          /> -->
        </div>

        <v-icon @click="$emit('delete', position)" icon="mdi-close"></v-icon>
      </div>

      <v-select
        class="select mt-4"
        v-model="position.payer"
        label="Плательщик"
        :items="persons"
        return-object
        item-title="name"
      ></v-select>

      <v-select
        class="select"
        v-model="position.persons"
        :items="persons"
        return-object
        item-title="name"
        chips
        label="Кто ел?"
        multiple
      ></v-select>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "position-cards",
  props: {
    positions: {
      type: Array,
      requiered: true,
    },
    persons: {
      type: Array,
      requiered: true,
    },
  },
  emits: ["delete"],
};
</script>

<style scoped lang="scss">
@import "../colors";
.position-card {
  width: 97%;
  height: 230px;
  background: $light-primary;
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
  //   .position-data {
  //     .position-name,
  //     .position-price {
  //       border: 2px solid $dark-primary;
  //       border-radius: 5px;
  //       text-align: center;
  //       color: $primary-text;
  //       outline: none;
  //       font-size: 20px;
  //     }

  //     .position-name {
  //       width: 200px;
  //     }

  //     .position-price {
  //       margin-left: 10px;
  //       width: 100px;
  //     }
  //   }
}

.card-input {
  color: $primary-text;
  border-color: $primary-text;
}

.card-input::placeholder {
  color: $primary-text;
}

.select {
  height: 75px;
}
</style>
