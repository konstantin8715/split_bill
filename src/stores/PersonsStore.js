import {
    defineStore
} from 'pinia';

import {
    usePositionsStore
} from "../stores/PositionsStore.js";

import {
    useDebtsStore
} from "../stores/DebtsStore.js";

import {
    personsApi
} from '../storage/PersonsApi.js';

export const usePersonsStore = defineStore('personsStore', {
    state: () => ({
        persons: [],
        currentId: 1,
        positionsStore: usePositionsStore(),
        debtsStore: useDebtsStore(),
    }),

    getters: {
        hasPersons() {
            return this.persons.length > 1;
        }
    },

    actions: {
        loadPersons() {
            const persons = personsApi.getPersons();
            const currentId = personsApi.getCurrentId();

            if (persons) {
                this.persons = persons;
            } else {
                this.persons = [];
            }


            if (currentId) {
                this.currentId = currentId;
            } else {
                this.currentId = 1;
            }
        },


        deletePerson(person) {
            this.persons = this.persons.filter(p => p.id !== person.id);    
            this.positionsStore.deleteAllPositions();
            personsApi.setPersons(this.persons);
        },

        addPerson(name) {
            this.persons.push({
                id: this.currentId,
                name: name
            });
            this.currentId++;
            personsApi.setPersons(this.persons);
            personsApi.setCurrentId(this.currentId);
        }
    }
});