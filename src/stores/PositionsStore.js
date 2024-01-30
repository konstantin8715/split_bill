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
            console.log('jfdlsj');
            for (const p of this.positions) {
                for (const key in p) {
                    console.log(p[key]);
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
        deletePosition(position) {
            this.positions = this.positions.filter(p => p.id !== position.id);
        },

        addPosition() {
            this.positions.push({
                id: this.currentId,
                name: null,
                price: null,
                payer: null,
                consumers: []
            });
            this.currentId++;
        }
    }
});