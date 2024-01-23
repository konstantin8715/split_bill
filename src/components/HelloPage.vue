<template>
  <v-card class="container">
    <div class="content-container">
      <app-banner class="hello-banner">Делить чек</app-banner>
      <div class="btn-block">
        <v-btn class="btn" @click="$router.push('addusers')"> Начать </v-btn>
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
}
.btn {
  background: $primary;
  width: 100%;
  margin-top: 15px;
  color: $text;
  font-size: 24px;
  border-radius: 10px;
}

</style>