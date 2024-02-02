import {
    defineStore
} from 'pinia';

import {
    usePersonsStore
} from './PersonsStore.js';

export const usePositionsStore = defineStore('positionsStore', {
    state: () => ({
        positions: [
            // {
            //     id: 1,
            //     name: "Борщ",
            //     price: 150,
            //     payer: null,
            //     consumers: []
            // }
        ],
        persons: usePersonsStore(),
        currentId: 1,
    }),

    getters: {
        hasPositions() {
            return this.positions.length > 0;
        },

        hasEmptyData() {
            for (const p of this.positions) {
                for (const key in p) {
                    if (!p[key]) {
                        return true;
                    }
                    if (Array.isArray(p[key])) {
                        if (p[key].length === 0) return true;
                    }
                }
            }
            return false;
        },
    },

    actions: {
        clearCurrentPositions() {
            console.log('function clearCurrentPostions');
            this.positions = [];
            this.currentId = 1;
        },

        deletePosition(position) {
            this.positions = this.positions.filter(p => p.id !== position.id);
        },

        addPosition() {
            this.positions.push({
                id: this.currentId,
                name: null,
                price: null,
                payer: null,
                persons: [],
            });
            this.currentId++;
        }
    }
});