<template lang="">
  <div class="app-banner">
    <span><slot></slot></span>
  </div>
</template>

<script>
export default {
  'name': 'app-banner',
};
</script>

<style scoped lang="scss">
@import "../../colors";
.app-banner {
  width: 90%;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: $dark-primary;

  span {
    font-size: 48px;
    color: $text;
  }
}

@media (max-width: 371px) {
  .app-banner {
    span {
      font-size: 40px;
    }
  }
}
</style>
