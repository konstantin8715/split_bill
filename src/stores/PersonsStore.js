import {
    defineStore
} from 'pinia';

export const usePersonsStore = defineStore('personsStore', {
    state: () => ({
        persons: [],
        currentId: 1,
    }),

    getters: {
        hasPersons() {
            return this.persons.length > 1;
        }
    },

    actions: {
        deletePerson(person) {
            this.persons = this.persons.filter(p => p.id !== person.id);
        },

        addPerson(name) {
            this.persons.push({ id: this.currentId, name: name });
            this.currentId++;
        }
    }
});