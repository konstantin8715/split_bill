<template lang="">
  <v-card class="container">
    <v-toolbar color="#7B1FA2">
      <div
        class="content-container d-flex justify-space-between flex-row align-center"
      >
        <input type="text" v-model="currentName" class="w-75 h-75" />
        <v-icon icon="mdi-plus" @click="addUser"></v-icon>
      </div>
    </v-toolbar>
    <div class="content-container">
      <v-list density="compact">
        <v-list-item
          class="pa-0"
          v-for="(user, i) in users"
          :key="i"
          :value="user"
          color="primary"
        >
          <template v-slot:append>
            <v-icon icon="mdi-close" @click="deleteUser(user.id)"></v-icon>
          </template>

          <v-list-item-title v-text="user.name"></v-list-item-title>
        </v-list-item>
      </v-list>
      <div class="btn-block">
        <v-btn @click="checkUsers" class="btn"> Дальше </v-btn>
      </div>
    </div>
  </v-card>
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
@import "../colors";
.add-users-form {
  margin: 0 auto;
}

.add-users-form-input {
  padding: 10px;
  margin-top: 20px;
  //   background: $light-primary;
  //   border: 5px solid $primary-text;
  //   border-radius: 5px;
  // width: 100px;
}

input {
  outline: none;
  border-bottom: 2px solid $text;
  color: $text;
  font-size: 1rem;
}

.users-list {
  margin: 0 auto;
}

.btn {
  background: $dark-primary;
  color: $text;
  width: 100%;
}

.btn-block {
  width: 50%;
  margin: 0 auto;
}

.main-card {
  background: $dark-primary !important;
}
</style>
