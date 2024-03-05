<template>
  <v-banner 
    lines="three" 
    icon="$warning" 
    color="#9C27B0"
    class="my-4"
  >
    <v-banner-text>
      Имя должно состоять из одного и более символа
    </v-banner-text>

    <template #actions>
      <v-btn @click="$emit('hide')">Скрыть</v-btn>
    </template>
  </v-banner>
</template>

<script>
export default {
  name: "app-warning-banner",
  emits: ["hide"],
};
</script>