import {
    defineStore
} from 'pinia';

import {
    splitAlgo
} from '../SplitAlgo.js';

import {
    usePositionsStore
} from './PositionsStore.js';

import {
    debtsApi
} from '../storage/DebtsApi.js';

export const useDebtsStore = defineStore('debtsStore', {
    state: () => ({
        debts: [],
        positionsStore: usePositionsStore(),
        currentId: 1,
    }),

    getters: {
        hasDebts() {
            return this.debts.length > 0;
        }
    },

    actions: {
        calculateDebts() {
            this.debts = splitAlgo(this.positionsStore.positions);
            debtsApi.setDebts(this.debts);
        },

        loadDebts() {
            const debts = debtsApi.getDebts();

            if (debts) {
                this.debts = debts;
            }
            else {
                this.debts = [];
            }
        },

        deleteAllDebts() {
            this.$reset();
            debtsApi.deleteAllDebts();
        }
    }
});