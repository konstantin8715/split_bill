import {
    defineStore
} from 'pinia';

import { usePositionsStore } from "../stores/PositionsStore.js";

export const usePersonsStore = defineStore('personsStore', {
    state: () => ({
        persons: [],
        currentId: 1,
        positionsStore: usePositionsStore(),
    }),

    getters: {
        hasPersons() {
            return this.persons.length > 1;
        }
    },

    actions: {
        deletePerson(person) {
            this.persons = this.persons.filter(p => p.id !== person.id);
            this.positionsStore.$reset();
        },

        addPerson(name) {
            this.persons.push({ id: this.currentId, name: name });
            this.currentId++;
        }
    }
});