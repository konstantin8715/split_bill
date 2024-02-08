<template lang="">
  <v-list-item :value="person">
    <template v-slot:append>
      <v-icon icon="mdi-close" @click="$emit('delete', person)"></v-icon>
    </template>

    <v-list-item-title
      class="list-item-title"
      v-text="person.name"
    ></v-list-item-title>
  </v-list-item>
</template>

<script>
export default {
  name: "person-item",
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
  emits: ["delete"],
};
</script>

<style scoped lang="scss">
@import "../font";
.list-item-title {
  font-size: $large-text;
}

@media (max-width: 769px) {
  .list-item-title {
    font-size: $medium-text;
  }
}

@media (max-width: 371px) {
  .list-item-title {
    font-size: $small-text;
  }
}
</style>
