<template lang="">
    <span class='info-text'>
        <slot></slot>
    </span>
</template>

<script>
export default {
    name: 'app-info-text',
}
</script>

<style scoped lang="scss">
@import "../../font";
.info-text {
    font-size: $large-text;
}

@media (max-width: 769px) {
  .info-text {
    font-size: $medium-text;
  }
}

@media (max-width: 371px) {
  .info-text {
    font-size: $small-text;
  }
}
</style>