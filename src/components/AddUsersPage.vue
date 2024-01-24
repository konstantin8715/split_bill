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

    <v-banner
      v-if="this.showWarningBanner"
      lines="three"
      icon="$warning"
      color="#9C27B0"
      class="my-4"
    >
      <v-banner-text>
        Имя должно состоять из одного и более символа
      </v-banner-text>

      <template v-slot:actions>
        <v-btn @click="this.showWarningBanner = false">Скрыть</v-btn>
      </template>
    </v-banner>

    <div class="content-container">
      <person-list :persons="persons" @delete="deletePersons" />
      <div v-if="this.persons.length > 1" class="enter-btn">
        <app-button @click="checkPersons">Дальше</app-button>
      </div>
      <div class="info-message" v-else>Введите 2 или более персон</div>
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
        this.showWarningBanner = false;
      } else {
        this.showWarningBanner = true;
      }
    },
    deletePersons(person) {
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
// TODO: input вынести в отдельный элемент UI
@import "../colors";
input {
  outline: none;
  border-bottom: 2px solid $text;
  color: $text;
  font-size: 1rem;
}

.enter-btn {
  width: 50%;
  margin: 0 auto;
}

.info-message {
    text-align: center;
}
</style>
