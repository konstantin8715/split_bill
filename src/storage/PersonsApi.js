export const personsApi = {
    getPersons() {
        return JSON.parse(sessionStorage.getItem("persons"));
    },

    setPersons(persons) {
        sessionStorage.setItem("persons", JSON.stringify(persons));
    },

    getCurrentId() {
        return sessionStorage.getItem("currentPersonsId");
    },

    setCurrentId(id) {
        sessionStorage.setItem("currentPersonsId", id);
    },
}