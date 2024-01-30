<template lang="">
  <v-card class="container">
    <v-toolbar color="#7B1FA2"> </v-toolbar>
    <div class="content-container">
      <div v-for="debt in this.debts"
        :key="debt.id" class="debts-container d-flex justify-space-between">
          <div>{{ debt.from }}</div>
          <div class="d-flex flex-column">
              <div>{{ debt.sum }}</div>
              <img src="https://freesvg.org/img/arrowright.png" width="50px" height="25px">
          </div>
          <div>{{ debt.to }}</div>
      </div>
    </div>
  </v-card>

</template>

<script>
export default {
  data() {
    return {
      debts: [
        { id: 1, from: "Никита", to: "Борис", sum: 145 },
        { id: 2, from: "Аркадий", to: "Николай", sum: 145 },
        { id: 3, from: "Алексей", to: "Борис", sum: 145 },
        { id: 4, from: "Маша", to: "Влад", sum: 146546545 },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
