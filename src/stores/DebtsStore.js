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
        },
    }
});