<template>
  <div class="app-banner d-flex align-center justify-center">
    <span>
      <slot>
      </slot>
    </span>
  </div>
</template>

<script>
export default {
  name: "app-banner",
};
</script>

<style scoped lang="scss">
@import "../../colors";
@import "../../font";
.app-banner {
  width: 90%;
  border-radius: 10px;
  background: $primary;

  span {
    font-size: $banner-size-lg;
    color: $text;
  }
}

@media (max-width: 371px) {
  .app-banner {
    span {
      font-size: $banner-size;
    }
  }
}
</style>