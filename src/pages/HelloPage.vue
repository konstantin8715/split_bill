<template>
  <v-card class="container">
    <div class="content-container">
      <app-banner class="hello-banner ma-auto">Делить чек</app-banner>
      <div class="btn-block w-50 ma-auto mt-4">
        <app-button @click="$router.push('addpersons')">Начать</app-button>
      </div>
    </div>
  </v-card>
</template>

<script setup></script>

<style scoped lang="scss">
@import "../colors";

.hello-banner {
  margin-top: 30% !important;
  height: 110px;
}

.btn-block {
  margin-top: 10px;
}
</style>
