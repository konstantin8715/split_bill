<template lang="">
  <v-btn class="btn">
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: "app-button",
};
</script>

<style scoped lang="scss">
@import "../../colors";

.btn {
  color: $text;
  background: $dark-primary;
  width: 100%;
}
</style>
