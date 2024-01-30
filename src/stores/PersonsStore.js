import {
    defineStore
} from 'pinia';

export const usePersonsStore = defineStore('personsStore', {
    state: () => ({
        persons: [{
                id: 1,
                name: "Valera"
            },
            {
                id: 2,
                name: "Nikita"
            },
            {
                id: 3,
                name: "Mikhail"
            },
            {
                id: 4,
                name: "Anna"
            },
        ],
        currentId: 5,
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