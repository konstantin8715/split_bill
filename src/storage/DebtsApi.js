export const debtsApi = {
    getDebts() {
        return JSON.parse(sessionStorage.getItem("debts"));
    },

    setDebts(debts) {
        sessionStorage.setItem("debts", JSON.stringify(debts));
    },

    deleteAllDebts() {
        sessionStorage.setItem("debts", null);
    },
}