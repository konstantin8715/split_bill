<template lang="">
  <v-list-item
    :value="person"
  >
    <template v-slot:append>
      <v-icon icon="mdi-close" @click="$emit('delete', person)"></v-icon>
    </template>

    <v-list-item-title v-text="person.name"></v-list-item-title>
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
};
</script>

<style lang="scss"></style>
