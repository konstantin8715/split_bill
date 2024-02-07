import {
    defineStore
} from 'pinia';

import {
    usePersonsStore
} from './PersonsStore.js';

import {
    positionsApi
} from '../storage/PositionsApi.js';

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
        loadPositions() {
            const positions = positionsApi.getPositions();
            const currentId = positionsApi.getCurrentId();

            if (positions) {
                this.positions = positions;
            } else {
                this.positions = [];
            }


            if (currentId) {
                this.currentId = currentId;
            } else {
                this.currentId = 1;
            }
        },

        saveCurrentPositions() {
            positionsApi.setPositions(this.positions);
        },

        deletePosition(position) {
            console.log(position.id);
            this.positions = this.positions.filter(p => p.id !== position.id);
            positionsApi.setPositions(this.positions);
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
            positionsApi.setPositions(this.positions);
            positionsApi.setCurrentId(this.currentId);
        },

        deleteAllPositions() {
            this.$reset();
            positionsApi.deleteAllPositions();
        }
    }
});