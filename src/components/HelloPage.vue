<template>
    <div class="container">
      <div class="hello-content">
        <div class="hello-banner">
          <span>Делить чек</span>
        </div>
        <v-btn class="btn" style="height: 25%;" @click="$router.push('addusers')">
            <!-- <router-link></router-link> -->
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
    margin-top: 15%;
    width: 65%;
    height: 40%;
    // border: 2px solid blue;  
  }
  .hello-banner {
    width: 100%;
    height: 50%;
    border: none;
    border-radius: 15px;
    text-align: center;
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
    background: $dark-primary;
    width: 50%;
    color: $text;
    font-size: 24px;
    border-radius: 15px;
  }
  </style>