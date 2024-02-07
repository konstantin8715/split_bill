<template lang="">
  <v-list density="compact">
    <person-item class="pa-0" v-for="(person, i) in persons" :key="i"
    :person="person" color="primary" @delete="$emit('delete', person)" />
  </v-list>
</template>

<script>
import PersonItem from "./PersonItem.vue";

export default {
  name: "person-list",
  components: { PersonItem },
  props: {
    persons: {
      type: Array,
      required: true,
    },
  },
  emits: ['delete'],
};
</script>

<style scoped lang="scss"></style>
