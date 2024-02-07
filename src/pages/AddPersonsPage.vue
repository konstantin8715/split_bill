<template lang="">
  <v-card class="container">
    <!-- TODO: toolbar вынести в отдельный элемент UI -->
    <v-toolbar color="#7B1FA2">
      <div
        class="content-container d-flex justify-space-between flex-row align-center"
      >
        <app-input
          :type="'text'"
          @keyup.enter="addPerson"
          v-model:value="currentName"
        ></app-input>
        <v-icon icon="mdi-plus" @click="addPerson"></v-icon>
      </div>
    </v-toolbar>

    <app-warning-banner
      v-if="this.showWarningBanner"
      @hide="this.hideWarningBanner"
    />

    <div class="content-container">
      <person-list
        :persons="this.personsStore.persons"
        @delete="this.personsStore.deletePerson"
      />
      <div v-if="this.personsStore.hasPersons" class="navigate-btn">
        <app-button @click="enter">Дальше</app-button>
      </div>
      <div v-else class="info-message">Введите 2 или более персон</div>
      <div class="navigate-btn">
        <app-button @click="back">Назад</app-button>
      </div>
    </div>
  </v-card>
</template>

<script>
import PersonList from "../components/PersonList.vue";
import { usePersonsStore } from "../stores/PersonsStore.js";

export default {
  components: { PersonList },
  data() {
    return {
      personsStore: usePersonsStore(),
      currentName: "",
      showWarningBanner: false,
    };
  },

  methods: {
    addPerson() {
      if (this.currentName.length > 0) {
        this.personsStore.addPerson(this.currentName);
        this.currentName = "";
        this.showWarningBanner = false;
      } else {
        this.showWarningBanner = true;
      }
    },

    enter() {
      if (!this.personsStore.hasPersons) {
        alert("Введите больше 1 пользователя");
      } else {
        this.$router.push("addpositions");
      }
    },

    back() {
      this.$router.push("/");
    },

    hideWarningBanner() {
      this.showWarningBanner = false;
    },
  },

  mounted() {
    this.personsStore.loadPersons();
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

.navigate-btn {
  width: 50%;
  margin: 0 auto;
  margin-bottom: 15px;
}

.info-message {
  text-align: center;
}
</style>
