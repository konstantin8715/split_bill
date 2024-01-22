<template>
    <div class="container">
      <div class="hello-content">
        <div class="hello-banner">
          <span>Делить чек</span>
        </div>
        <v-btn class="btn" @click="$router.push('addusers')">
            Начать
        </v-btn>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped lang="scss">
  @import '../colors';
  
  
  .hello-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    // margin-top: 15%;
    width: 65%;
    height: 100%;
    // border: 2px solid blue;  
  }
  .hello-banner {
    width: 100%;
    height: 25%;
    border: none;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: $primary;
    
    span {
      font-size: 52px;
      color: $text;
    }
  }
  
  .btn {
    margin-top: 10px;
    background: $accent;
    width: 50%;
    height: 15% !important;
    color: $text;
    font-size: 24px;
    border-radius: 15px;
  }
  </style>