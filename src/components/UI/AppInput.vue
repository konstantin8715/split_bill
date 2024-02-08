<template lang="">
  <input
    :type="type"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('update:value', $event.target.value)"
  />
</template>

<script>
export default {
  name: "app-input",
  props: {
    value: {
      requiered: true,
    },
    type: {
      type: String,
      requiered: true,
    },
    placeholder: {
      type: String,
    }
  },

  emits: ["update:value"],
};
</script>

<style scoped lang="scss">
@import "../../colors";
@import "../../font";

input {
  outline: none;
  border-bottom: 2px solid $text;
  color: $text;
  font-size: $large-text;
}

@media (max-width: 769px) {
  input {
    font-size: $medium-text;
  }
}

@media (max-width: 371px) {
  input {
    font-size: $small-text;
  }
}

input::placeholder {
  color: $text;
  opacity: 0.5;
}
</style>
