<template>
  <v-card class="container">
    <div class="content-container">
      <app-banner class="hello-banner">Делить чек</app-banner>
      <div class="btn-block">
        <app-button @click="$router.push('addpersons')">Начать</app-button>
      </div>
    </div>
  </v-card>
</template>

<script setup></script>

<style scoped lang="scss">
@import "../colors";

.hello-banner {
  margin: 0 auto;
  margin-top: 40%;
}

.btn-block {
  width: 50%;
  margin: 0 auto;
  margin-top: 10px;
}
</style>