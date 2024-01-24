<template lang="">
  <v-card class="container">
    <!-- TODO: toolbar вынести в отдельный элемент UI -->
    <v-toolbar color="#7B1FA2">
      <div
        class="content-container d-flex justify-space-between flex-row align-center"
      >
        <!-- TODO: input вынести в отдельный элемент UI -->
        <input type="text" v-model="currentName" class="w-50 h-75" />
        <v-icon icon="mdi-plus" @click="addUser"></v-icon>
      </div>
    </v-toolbar>

    <v-banner v-if="this.showWarningBanner" lines="three" icon="$warning" color="#9C27B0" class="my-4">
      <v-banner-text>
        Имя должно состоять из одного и более символа
      </v-banner-text>

      <template v-slot:actions>
        <v-btn @click='this.showWarningBanner = false'>Скрыть</v-btn>
      </template>
    </v-banner>

    <div class="content-container">
      <person-list :persons="persons" @delete="deletePersons" />
      <div class="btn-block">
        <app-button v-if="this.persons.length > 1" @click="checkPersons"
          >Дальше</app-button
        >
        <div v-else>Введите 2 или более персон</div>
      </div>
    </div>
  </v-card>
</template>

<script>
import PersonList from "./PersonList.vue";

export default {
  components: { PersonList },
  data() {
    return {
      persons: [
        { id: 1, name: "Valera" },
        { id: 2, name: "Nikita" },
        { id: 3, name: "Mikhail" },
        { id: 4, name: "Anna" },
      ],
      currentName: "",
      currentId: 4,
      showWarningBanner: false,
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
        this.persons.push({ id: this.currentId++, name: this.currentName });
        this.currentName = "";
      }
      else {
        this.showWarningBanner = true;
      }
    },
    deletePersons(person) {
      // console.log(id);
      this.persons = this.persons.filter((p) => p.id !== person.id);
    },
    checkPersons() {
      if (this.persons.length < 2) {
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

// .btn {
//   background: $dark-primary;
//   color: $text;
//   width: 100%;
// }

.btn-block {
  width: 50%;
  margin: 0 auto;
}

.main-card {
  background: $dark-primary !important;
}
</style>
