<template>
  <v-btn class="btn w-100">
    <slot>
    </slot>
  </v-btn>
</template>

<script>
export default {
  name: "app-button",
};
</script>

<style scoped lang="scss">
@import "../../colors";
@import "../../font";

.btn {
  color: $text;
  background: $dark-primary;
  font-size: $large-button-text;
}

@media (max-width: 769px) {
  .btn {
    font-size: $medium-button-text;
  }
}

@media (max-width: 371px) {
  .btn {
    font-size: $small-button-text;
  }
}
</style>