<template lang="">
  <div class="container">
    <v-form class="add-users-form w-75 d-flex justify-center pt-5 align-center" fast-fail @submit.prevent>
      <v-text-field
        class="add-users-form-input"
        v-model="currentName"
        label="Введите имя"
        :rules="currentNameRules"
      ></v-text-field>

      <v-btn class="ml-5" type="submit" style="border-radius: 50%; width: 10px; height: 50px" @click="addUser">
        <v-icon color="primary" icon="mdi-plus"></v-icon>
      </v-btn>
    </v-form>

    <v-list class="mt-5 w-75 users-list" density="compact">
      <v-list-item class="d-flex" v-for="user in users" :key="user.id" :value="user">
        <v-list-item-title v-text="user.id"></v-list-item-title>
        <v-list-item-title v-text="user.name"></v-list-item-title>
        <v-btn style="border-radius: 15px" @click="deleteUser(user.id)">
          <v-icon color="primary" icon="mdi-close"></v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
    <v-btn @click="checkUsers"> Дальше </v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: "Valera" },
        { id: 2, name: "Nikita" },
        { id: 3, name: "Mikhail" },
        { id: 4, name: "Anna" },
      ],
      currentName: "",
      currentId: 4,
      currentNameRules: [
        (value) => {
          if (value.length > 0) return true;
          return "Нужно ввести имя";
        },
      ],
    };
  },

  methods: {
    addUser() {
      if (this.currentName.length > 0) {
        this.users.push({ id: this.currentId++, name: this.currentName });
        this.currentName = "";
      }
    },
    deleteUser(id) {
      // console.log(id);
      this.users = this.users.filter((user) => user.id !== id);
    },
    checkUsers() {
      if (this.users.length < 2) {
        alert("Введите больше 1 пользователя");
      } else {
        this.$router.push("calculate");
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '../colors';
.add-users-form {
  margin: 0 auto;
  .add-users-form-input {
    background: $light-primary;
    border: 5px solid $primary-text;
    border-radius: 5px;
    // width: 100px;
  }
}

.users-list {
    margin: 0 auto;
}
</style>
