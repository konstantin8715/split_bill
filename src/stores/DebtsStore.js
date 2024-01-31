import {
    defineStore
} from 'pinia';

import {splitAlgo} from '../SplitAlgo.js';

import {
    usePositionsStore
} from './PositionsStore.js';

export const useDebtsStore = defineStore('debtsStore', {
    state: () => ({
        debts: [
            // {
            //     id: 1,
            //     from: {id: 1, name: 'Tamara'},
            //     to: {id: 1, name: 'Nikita'},
            //     sum: 85,
            // }
        ],
        positionsStore: usePositionsStore(),
        currentId: 1,
    }),

    actions: {
        calculateDebts() {
            this.debts = splitAlgo(this.positionsStore.positions);      
        }
    }
});