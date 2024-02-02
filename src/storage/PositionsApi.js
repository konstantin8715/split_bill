export const positionsApi = {
    getPositions() {
        return JSON.parse(sessionStorage.getItem("positions"));
    },

    setPositions(positions) {
        sessionStorage.setItem("positions", JSON.stringify(positions));
    },

    getCurrentId() {
        return sessionStorage.getItem("currentPositionId");
    },

    setCurrentId(id) {
        sessionStorage.setItem("currentPositionId", id);
    },

    deleteAllPositions() {
        sessionStorage.setItem("positions", null);
    }
}