<template lang="">
  <input
    :type="type"
    :value="value"
    @input="$emit('update:value', $event.target.value)"
    class="w-50"
  />
</template>

<script>
export default {
  name: "app-input",
  props: {
    value: {
      type: String,
      requiered: true,
    },
    type: {
      type: String,
      requiered: true,
    },
  },

  emits: ["update:value"],
};
</script>

<style scoped lang="scss">
@import "../../colors";

input {
  outline: none;
  border-bottom: 2px solid $text;
  color: $text;
  font-size: 1rem;
}
</style>
